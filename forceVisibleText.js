const fs = require('fs');
const path = require('path');

console.log("Forcing visible text globally...");

function forceVisible(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      forceVisible(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Skip intentionally dark components
      if(fullPath.includes('Navbar') || fullPath.includes('Footer') || fullPath.includes('Hero')) {
        continue;
      }
      
      // Temporarily protect valid strings
      content = content.replace(/dark:text-white/g, 'DAARK_TEXT_WHITE');
      content = content.replace(/text-white\/[0-9]+/g, function(match){ return match.replace('text-white', 'TEXT_OPAC_WHITE'); });
      
      // Protect explicitly safe buttons that have dark backgrounds
      content = content.replace(/bg-brand-black(.*?)text-white/g, 'bg-brand-black$1SAAFE_TEXT_WHITE');
      content = content.replace(/bg-brand-blue(.*?)text-white/g, 'bg-brand-blue$1SAAFE_TEXT_WHITE');
      content = content.replace(/bg-brand-steel(.*?)text-white/g, 'bg-brand-steel$1SAAFE_TEXT_WHITE');
      
      // Now, whatever text-white is left is likely unsafe on light mode.
      content = content.replace(/(?<!-)text-white(?!-)/g, 'text-brand-black dark:text-white');
      
      // Unprotect
      content = content.replace(/DAARK_TEXT_WHITE/g, 'dark:text-white');
      content = content.replace(/TEXT_OPAC_WHITE/g, 'text-white');
      content = content.replace(/SAAFE_TEXT_WHITE/g, 'text-white');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

forceVisible('./src');
console.log("Done");
