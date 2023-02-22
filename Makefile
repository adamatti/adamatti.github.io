.DEFAULT_GOAL := help

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean:
	@rm -rf .next

clean-hard: clean
	@rm -rf node_modules

install: ## install dependencies
	@yarn --silent install

run-dev: ## run as dev
	@yarn --silent dev

lint: ## lint
	@yarn --silent lint --fix

build-only:
	@yarn --silent build

build: clean build-only ## build
	
.PHONY: graphql-server
graphql-server: ## Run graphql server (required by local dev / build)
	@yarn --silent server