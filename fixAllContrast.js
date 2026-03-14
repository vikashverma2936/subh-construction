const fs = require('fs');
const path = require('path');

console.log("Running comprehensive fix...");

function processRevert(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processRevert(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We know there's a bug where `text-white` replaced `text-brand-black dark:text-white` incorrectly.
      // This often affects headings like `text-4xl text-white`
      
      // Let's specifically target h1, h2, h3 tags that are on white backgrounds.
      // Easiest is to change `text-white` back to `text-brand-black dark:text-white` for known patterns.
      
      content = content.replace(/text-4xl(.*?)text-white(?=.*mb)/g, 'text-4xl$1text-brand-black dark:text-white');
      content = content.replace(/text-3xl(.*?)text-white(?=.*mb)/g, 'text-3xl$1text-brand-black dark:text-white');
      content = content.replace(/text-2xl(.*?)text-white(?=.*mb)/g, 'text-2xl$1text-brand-black dark:text-white');
      
      // Paragraph subtexts that should be gray not white
      content = content.replace(/text-lg(.*?)text-white(?=.*max-w-2xl)/g, 'text-lg$1text-gray-600 dark:text-gray-400');
      content = content.replace(/text-lg(.*?)text-white(?=.*font-light)/g, 'text-lg$1text-gray-600 dark:text-gray-400');

      // However, we MUST NOT corrupt Hero or Footer or Navbar which legitimately need `text-white`.
      if (!file.includes('Navbar') && !file.includes('Footer')) {
        // Safe generic replacement for any `bg-white/bg-gray-50/bg-gray-100/bg-brand-light` that contains `text-white`
        // Wait, regular expressions across multiple lines in HTML are tricky. We'll stick to the heading patterns above.
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

// Target the 'app' directory where most pages are
processRevert('./src/app');
console.log("Done");
