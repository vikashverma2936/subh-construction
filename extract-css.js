const fs = require('fs');
const path = require('path');

let classCounter = 1;
const classMap = new Map();
let cssOutput = '\n/* --- Extracted Semantic Classes --- */\n\n@layer components {\n';

function extractClasses(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      extractClasses(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Match standard static className="<classes>"
      content = content.replace(/className="([^"]+)"/g, (match, classString) => {
        const trimmed = classString.trim();
        // Ignore single word classes or simple strings that aren't really Tailwind utility chains
        if (!trimmed.includes(' ') || trimmed === '') return match;
        
        let newHash;
        if (classMap.has(trimmed)) {
             newHash = classMap.get(trimmed);
        } else {
             newHash = 'subh-ui-' + classCounter++;
             classMap.set(trimmed, newHash);
             cssOutput += `  .${newHash} {\n    @apply ${trimmed};\n  }\n`;
        }
        return `className="${newHash}"`;
      });
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

console.log('Extracting from components...');
extractClasses('./src/components');
console.log('Extracting from app...');
extractClasses('./src/app');

cssOutput += '}\n';

fs.appendFileSync('./src/app/globals.css', cssOutput);
console.log(`Successfully extracted ${classMap.size} unique class combinations into globals.css.`);
