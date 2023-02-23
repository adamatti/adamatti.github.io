.DEFAULT_GOAL := help

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: ## clean folder
	@rm -rf _next
	@rm -rf blog
	@rm -rf assets
	
	@rm -f *.html
	@rm -f *.png
	@rm -f *.ico

deploy: ## deploy
	git add .
	git commit -m "chore: deploy"
	git push