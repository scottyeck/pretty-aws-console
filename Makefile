NODEBIN ?= ./node_modules/.bin

dist: dist/*

dist/styles.css: src/styles.pcss
	$(NODEBIN)/babel-node ./scripts/build-css.js

dist/index.js: src/index.js
	$(NODEBIN)/babel src/index.js --out-file dist/index.js
