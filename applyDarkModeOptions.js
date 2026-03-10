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
      
      // We will only perform light/dark replacements on typical content sections
      // Hero sections (pt-32) must be skipped or handled differently.
      
      // First, Backgrounds
      content = content.replace(/bg-brand-black(?![\w-\/])/g, 'bg-white dark:bg-brand-black');
      content = content.replace(/bg-brand-dark(?![\w-\/])/g, 'bg-gray-50 dark:bg-brand-dark');
      content = content.replace(/bg-white\/5(?![\w-\/])/g, 'bg-gray-100 dark:bg-white/5');
      content = content.replace(/border-white\/10(?![\w-\/])/g, 'border-gray-200 dark:border-white/10');
      content = content.replace(/border-white\/5(?![\w-\/])/g, 'border-gray-200 dark:border-white/5');
      
      // Text colors
      // We replace `text-white` with `text-brand-black dark:text-white` everywhere EXCEPT:
      // - Already prefixed with `dark:` OR inside Hero sections
      // To manage this safely, let's target specific common phrases.
      content = content.replace(/(?<!dark:)text-white/g, 'text-brand-black dark:text-white');
      
      // Specific gray inversions
      content = content.replace(/(?<!dark:)text-gray-400/g, 'text-gray-600 dark:text-gray-400');
      content = content.replace(/(?<!dark:)text-gray-300/g, 'text-gray-700 dark:text-gray-300');
      
      // Border white
      content = content.replace(/(?<!dark:)(?<!-)border-white(?![\w-\/])/g, 'border-gray-300 dark:border-white');

      // Now we must fix the Hero sections which should remain strictly dark!
      // Any text in Hero section (pt-32) shouldn't be dark-mode toggled.
      // Easiest is to manually revert the Hero classes in the few affected files.
      // But we can also fix specific text in Navbar.

      // Custom fix: `bg-brand-yellow text-brand-black dark:text-white` -> `bg-brand-yellow text-brand-black`
      content = content.replace(/bg-brand-yellow text-brand-black dark:text-white/g, 'bg-brand-yellow text-brand-black');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processFiles('./src/components');
processFiles('./src/app');
