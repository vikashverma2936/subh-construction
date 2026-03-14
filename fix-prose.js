const fs = require('fs');
const path = require('path');

const cssPath = './src/app/globals.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const proseString = "prose prose-invert prose-lg max-w-none prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-brand-yellow prose-p:text-gray-700 dark:text-gray-300 prose-p:leading-relaxed prose-strong:text-brand-black dark:text-white prose-a:text-brand-yellow";

// Replace it in CSS with an empty block
cssContent = cssContent.replace(
  /@apply prose prose-invert prose-lg max-w-none prose-headings:font-\[family-name:var\(--font-heading\)\] prose-headings:text-brand-yellow prose-p:text-gray-700 dark:text-gray-300 prose-p:leading-relaxed prose-strong:text-brand-black dark:text-white prose-a:text-brand-yellow;/g,
  '@apply block;'
);
fs.writeFileSync(cssPath, cssContent);

// Find which TSX file uses it and replace it
function fixTsx(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixTsx(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('"subh-ui-109"')) {
        content = content.replace(/"subh-ui-109"/g, `"subh-ui-109 ${proseString}"`);
        fs.writeFileSync(fullPath, content);
        console.log(`Patched prose in ${fullPath}`);
      }
    }
  }
}

fixTsx('./src');
console.log('Fixed prose CSS rules.');
