import precss from "precss";
import postcss from "postcss";
import fs from "fs";
import path from "path";
import { get as getAppRootDir } from "app-root-dir";

const appRootDir = getAppRootDir();
const srcDir = path.join(appRootDir, "src");
const distDir = path.join(appRootDir, "dist");

const srcCssPath = path.join(srcDir, "styles.pcss");
const distCssPath = path.join(distDir, "styles.css");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.readFile(srcCssPath, (err, css) => {
  postcss([precss])
    .process(css, { from: srcCssPath, to: distCssPath })
    .then(result => {
      fs.writeFile(distCssPath, result.css, () => true);
    });
});
