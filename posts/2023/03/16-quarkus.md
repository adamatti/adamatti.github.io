---
title: Quarkus - a new try on native images
date: "2023-03-16"
slug: quarkus
summary: A blazing fast spring competitor
tags:
  - quarkus
  - java
  - jvm
  - gradle
---

Three years ago I did some tests using [quarkus](https://quarkus.io/), to use on some microservices / pet projects. The commands to make it run using native binary are on this [gist](https://gist.github.com/adamatti/4633a7559647aaf779d60e3aad543b6b).

Today I tried it again, just registering here my steps:

# 1. Install quarkus

I am using [sdkman](https://sdkman.io/) for it - it is a java version manager, similar to [fnm](https://github.com/Schniz/fnm) (for node).

It is easy as `sdk install quarkus`.

# 2. Create a project

Just need to run:

```shell
quarkus create app adamatti.github.io:learn-quarkus --extension='resteasy-reactive' --gradle
```

Where `learn-quarkus` is the project name and `adamatti.github.io` is the main package name.

Yes, I decided to use [gradle](https://gradle.org/) instead of [maven](https://maven.apache.org/). Not willing to use XML in 2023 :-p

Then I added this extension to build inside a docker container: 

```shell
gradle addExtension --extensions=quarkus-container-image-docker
```

# 3. Run

`./gradlew quarkusDev`. I can't deny, it is amazing be able to change source files without the need to stop/start the application multiple times

# 4. Build native

```shell
./gradlew build -Dquarkus.package.type=native -Dquarkus.native.container-build=true
```

With this, you don't need to have [graalvm](https://www.graalvm.org/) on local machine.

The binary file was created on `build` folder as `learn-quarkus-1.0.0-SNAPSHOT-runner`. It took ~4mins on my machine (Apple M1), 40mb is the size.

# 5. Run the binary in a docker container

... just to make sure it doesn't need any of the dependencies in my local machine (e.g. java) and simulate a real deploy.

```shell
docker run --rm -it \
    -p "8080:8080" \
    -v ${PWD}/build/learn-quarkus-1.0.0-SNAPSHOT-runner:/app \
    centos \
    /app -Dquarkus.http.host=0.0.0.0
```

# Extra - version configuration

Just created a `.sdkmanrc` file to make sure I would use the same versions in the future: 

```shell
# Enable auto-env through the sdkman_auto_env config
# Add key=value pairs of SDKs to use below
java=11.0.11.9.1-amzn
gradle=7.5.1
quarkus=3.0.0.Alpha6
```

# Conclusion

1. Quarkus is really fast, I would love to work with it in production
2. Really loved the way the resources/controllers are created, e.g. 

```java
package adamatti.github.io;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from RESTEasy Reactive";
    }
}
```

3. Loved the tests created with Gherkin syntax: 

```java
package adamatti.github.io;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class GreetingResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/hello")
          .then()
             .statusCode(200)
             .body(is("Hello from RESTEasy Reactive"));
    }

}
```

4. It also create tests for the native version (powered by the additional annotation):

```java
package adamatti.github.io;

import io.quarkus.test.junit.QuarkusIntegrationTest;

@QuarkusIntegrationTest
public class GreetingResourceIT extends GreetingResourceTest {
    // Execute the same tests but in packaged mode.
}
```

5. [Micronault](https://micronaut.io/) is still my prefered [spring](https://spring.io/) replacement, but this is a subject for another topic.

I still curious about Quarkus usage, let's keep watching and see how does it goes.