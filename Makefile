dist/styles.css: src/styles.pcss
	./node_modules/.bin/babel-node ./scripts/build-css.js

dist/index.js: src/index.js
	./node_modules/.bin/babel src/index.js --out-file dist/index.js