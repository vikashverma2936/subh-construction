const fs = require('fs');
const path = require('path');

function fixHero(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixHero(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // The Hero section header typically starts with: function Hero()
      // We will search for 'function Hero() {' and process up to the end of that section.
      
      const parts = content.split('/* ─── Hero ─── */');
      
      if (parts.length > 1) {
          // split[1] contains the Hero and everything after.
          // let's split that by the next comment block
          const afterHeroParts = parts[1].split('/* ─── ');
          let heroCode = afterHeroParts[0];
          
          heroCode = heroCode.replace(/text-brand-black dark:text-white/g, 'text-white');
          heroCode = heroCode.replace(/text-gray-600 dark:text-gray-400/g, 'text-gray-400');
          heroCode = heroCode.replace(/text-gray-700 dark:text-gray-300/g, 'text-gray-300');
          heroCode = heroCode.replace(/bg-white dark:bg-brand-black/g, 'bg-brand-black');
          
          afterHeroParts[0] = heroCode;
          parts[1] = afterHeroParts.join('/* ─── ');
          content = parts.join('/* ─── Hero ─── */');
          
          fs.writeFileSync(fullPath, content);
      } else {
          // Simple pages that just have a hero header directly
          if (content.includes('pt-32 pb-20') || content.includes('pt-32 pb-16')) {
             // For files like AboutPageClient, ServicesPageClient that don't have block comments
             // The first <section className="pt-32 pb-20 ..."> is the Hero.
             // We can just regex replace inside the first section.
             const sectionRegex = /(<section className="(pt-32[^"']+)".*?>[\s\S]*?<\/section>)/;
             content = content.replace(sectionRegex, (match) => {
                 return match.replace(/text-brand-black dark:text-white/g, 'text-white')
                             .replace(/text-gray-600 dark:text-gray-400/g, 'text-gray-400')
                             .replace(/text-gray-700 dark:text-gray-300/g, 'text-gray-300')
                             .replace(/bg-white dark:bg-brand-black/g, 'bg-brand-black');
             });
             fs.writeFileSync(fullPath, content);
          }
      }
    }
  }
}

fixHero('./src/app');
