import fs from "fs";
import path from "path";

const rootDir = "./out";

/**
 * Fixes all absolute paths in HTML and CSS files
 * Example:
 *   /_next/static/...    → ./_next/static/...
 *   /products/img.png    → ./products/img.png
 *   /styles/main.css     → ./styles/main.css
 */
function fixFile(filePath) {
    let content = fs.readFileSync(filePath, "utf-8");
    content = content.replace(
        /(["'(])\/(?!\/)/g,
        '$1./'
    );

    fs.writeFileSync(filePath, content, "utf-8");
}

function walk(dir) {
    for (const entry of fs.readdirSync(dir)) {
        const entryPath = path.join(dir, entry);
        const stat = fs.statSync(entryPath);

        if (stat.isDirectory()) {
            walk(entryPath);
        } else if (entryPath.endsWith(".html") || entryPath.endsWith(".css")) {
            fixFile(entryPath);
        }
    }
}

walk(rootDir);
console.log("✅ All absolute paths converted to relative ./ paths!");
