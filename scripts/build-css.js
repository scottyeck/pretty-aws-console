import precss from "precss";
import postcss from "postcss";
import fs from "fs";
import path from "path";
import { get as getAppRootDir } from "app-root-dir";

const rawCssPath = path.join(getAppRootDir(), "src/styles.css");
const distCssPath = path.join(getAppRootDir(), "dist/styles.css");

const appRootDir = getAppRootDir();
const srcDir = path.join(appRootDir, "src");
const distDir = path.join(appRootDir, "dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.readFile(rawCssPath, (err, css) => {
  postcss([precss])
    .process(css, { from: rawCssPath, to: distCssPath })
    .then(result => {
      fs.writeFile(distCssPath, result.css, () => true);
    });
});

// const rawCss = fs.readFileSync(rawCssPath);
// const css = precss.process(rawCss);
// console.log(css);
