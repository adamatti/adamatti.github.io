.DEFAULT_GOAL := help

RELEASE_TAG:=$(shell date -u +%Y%m%dT%H%M%SZ)

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean:
	@rm -rf .next
	@rm -rf out

clean-hard: clean
	@rm -rf node_modules

install: ## install dependencies
	@yarn --silent install

run-dev: ## run as dev
	@RELEASE_TAG=$(RELEASE_TAG) NEXT_PUBLIC_RELEASE_TAG=$(RELEASE_TAG) \
		yarn --silent dev

lint: ## lint
	@yarn --silent lint --fix

build-only: lint
	@yarn --silent build

build: clean build-only ## build
	
build-prod: clean
	@BASE_PATH=/page-react NEXT_PUBLIC_BASE_PATH=/page-react \
		RELEASE_TAG=$(RELEASE_TAG) NEXT_PUBLIC_RELEASE_TAG=$(RELEASE_TAG) \
		NODE_ENV=production yarn --silent export
	@touch out/.nojekyll

	@cd ../page-react-deploy; make clean
	@cp -R out/* ../page-react-deploy

release: build-prod
	@cd ../page-react-deploy; make deploy
	@echo "Version $(RELEASE_TAG) released"

.PHONY: graphql-server
graphql-server: ## Run graphql server (required by local dev / build)
	@nodemon -w ./graphql-server --exec "yarn --silent server"