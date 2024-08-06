Create a new version of https://adamatti.github.io, now with react

# Deploy process

- start graphql server (`make graphql-server`). This is required for html static generation.
- clone the `gh-pages` branch, e.g. `git clone -b gh-pages git@github.com:adamatti/page-react.git ../page-react-deploy`
- run export (`make build-prod`)
- go to the deploy folder (`cd ../page-react-deploy`), add changes to git and publish (`git add . &&	git commit -m "chore: deploy"	&& git push`)

#### Questions

- Q: why it is not on github actions / circleci / travis / etc? 
  - A: because I don't want to publish the `graphql-server` content for now
- Q: do I need all those manual steps?
  - A: no, I automated it using makefiles. Just explained it with extra steps for teaching purposes.
