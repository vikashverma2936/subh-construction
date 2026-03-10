const fs = require('fs');
const path = require('path');

function replaceColors(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      content = content.replace(/bg-brand-blue-dark/g, 'bg-brand-black');
      content = content.replace(/bg-brand-grey/g, 'bg-brand-dark');
      content = content.replace(/border-brand-blue-light/g, 'border-white/10');
      content = content.replace(/border-brand-blue(\/[0-9]+)?/g, 'border-white$1');
      content = content.replace(/bg-brand-blue(?!\-)/g, 'bg-white/5');
      content = content.replace(/from-brand-blue-dark/g, 'from-black');
      content = content.replace(/via-brand-blue-dark/g, 'via-black');
      content = content.replace(/to-brand-blue-dark/g, 'to-black');
      content = content.replace(/from-brand-blue(?!\-)/g, 'from-brand-dark');
      content = content.replace(/via-brand-blue(?!\-)/g, 'via-brand-dark');
      content = content.replace(/to-brand-blue(?!\-)/g, 'to-brand-dark');
      
      // Specifically fix text colors.
      content = content.replace(/text-brand-blue-dark/g, 'text-white');
      // For CTA and yellow badges we will manually fix `text-white` back to `text-brand-black` where needed.
      
      content = content.replace(/text-brand-blue-light/g, 'text-gray-300');
      content = content.replace(/text-brand-grey-dark/g, 'text-gray-400');
      content = content.replace(/text-brand-blue(?!\-)/g, 'text-gray-400');
      
      fs.writeFileSync(fullPath, content);
      console.log('Replaced in:', fullPath);
    }
  }
}

replaceColors('./src/components');
replaceColors('./src/app');
