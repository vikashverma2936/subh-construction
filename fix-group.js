const fs = require('fs');
const path = require('path');

const cssPath = './src/app/globals.css';
let cssContent = fs.readFileSync(cssPath, 'utf8');

const groupClasses = [];
const lines = cssContent.split('\n');
let currentClass = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('.subh-ui-')) {
    currentClass = line.match(/\.(subh-ui-\d+)/)[1];
  }
  if (line.includes('@apply') && line.match(/\bgroup\b/)) {
    groupClasses.push(currentClass);
    // Remove group from the apply line
    lines[i] = line.replace(/\bgroup\b/g, '').replace(/  +/g, ' ');
  }
}

fs.writeFileSync(cssPath, lines.join('\n'));

console.log('Fixed CSS. Affected group classes:', groupClasses);

function fixTsx(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixTsx(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const cls of groupClasses) {
        if (content.includes(`"${cls}"`)) {
          content = content.replace(new RegExp(`"${cls}"`, 'g'), `"group ${cls}"`);
          modified = true;
        }
      }
      if (modified) fs.writeFileSync(fullPath, content);
    }
  }
}

fixTsx('./src');
console.log('Fixed TSX files.');
