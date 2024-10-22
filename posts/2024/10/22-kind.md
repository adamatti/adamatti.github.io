---
title: 'Kind - k8s on local'
summary: 'Useful if you need to test ingress changes like me'
date: '2024-10-22'
slug: kind
tags:
  - k8s
  - kubernetes
  - docker
---

Ok, let's say you need to test ingress changes and want fast feedback, and don't have access to actual k8s cluster. What would you do?

## Kind for the rescue

[Kind](https://kind.sigs.k8s.io/) is just one of the options. It could be [Minikube](https://minikube.sigs.k8s.io/), Docker Desktop, [K3s](https://github.com/k3s-io/k3s), [Microk8s](https://microk8s.io/), etc

My goal is just share the steps I did to solve my problem, to others with similar needs and my future self.

## 1. First, a node app

Nothing fancy, just the basic to test:

a. `server.js`

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 4000;

app.get('/*', (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.listen(PORT, () => {
  console.log('Server started');
});
```

b. `package.json`

```json
{
  "scripts": {},
  "dependencies": {
    "express": "^4.21.1"
  }
}
```

c. `Dockerfile`

```Dockerfile
FROM node:23

RUN mkdir -p /app
WORKDIR /app

COPY package.json ./
RUN npm install

COPY server.js ./

ENV PORT=4000
CMD ["node", "/app/server.js"]
```

Then build an image with something like `docker build --quiet . -t app:local`

## 2. The cluster

```bash
# Install kind on mac
brew install kind

# Create the cluster with custom config
cat <<EOF | kind create cluster --config=-
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
EOF

# Install nginx
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml --context kind-kind

# Make sure it is working
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s --context kind-kind
```

## 3. deploy the app

a. publish image to the cluster:

```bash
kind load docker-image app:local
```

b. create pod, service, ingress: just save it in a file (e.g. k8s.yaml)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: node-app
  labels:
    app: node-app
spec:
  type: ClusterIP
  ports:
    - port: 80
      targetPort:
      protocol: TCP
      name: http
  selector:
    app: node-app
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-app
spec:
  replicas: 1
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2
      maxUnavailable: 0
  selector:
    matchLabels:
      app: node-app
  template:
    metadata:
      labels:
        app: node-app
    spec:
      serviceAccountName: default
      securityContext: null
      containers:
        - name: node-app
          image: 'app:local'
          env:
            - name: PORT
              value: '80'
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: node-app
  annotations:
    kubernetes.io/ingress.class: nginx

spec:
  rules:
    - host: 'node-app.com'
      http:
        paths:
          - backend:
              service:
                name: node-app
                port:
                  number: 80
            pathType: ImplementationSpecific
```

c. apply the changes:

```bash
kubectl apply -f k8s.yaml --context kind-kind

```

## 4. Testing

a. with curl

```
curl --url http://localhost/test --header 'HOST: node-app.com'
```

or

b. with `/etc/hosts`

- Add `127.0.0.1 node-app.com` to `/etc/hosts`
- Access node-app.com on any browser

## 5. Done?

So, destroy the cluster to release memory:

```bash
kind delete cluster
```

## So...

If you tried it and worked (or not), pls let me know.

For me it worked, I hope it help others and my future self
