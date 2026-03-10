const fs = require('fs');
const path = require('path');

function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processFiles(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/bg-brand-yellow text-white/g, 'bg-brand-yellow text-brand-black');
      content = content.replace(/hover:bg-brand-yellow hover:text-white/g, 'hover:bg-brand-yellow hover:text-brand-black');
      // In CTA section of page.tsx:
      // There are some places where it used to be text-brand-black but got replaced with text-white
      // For instance: `bg-white/5` might have `text-white` but yellow section `bg-brand-yellow` has `text-white`
      content = content.replace(/text-white mb-6">\n\s*Ready to/g, 'text-brand-black mb-6">\n            Ready to');
      content = content.replace(/text-white(?=\/.*?>\n\s*Our team will)/g, 'text-brand-black');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processFiles('./src/components');
processFiles('./src/app');
