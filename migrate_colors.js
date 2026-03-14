const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replaceInFile = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.log(err);
    
    // We will do specific replacements next since we need to intelligently target
    // what needs to be brand-blue vs brand-steel. This script is a placeholder.
    let result = data;
    
    
    // As a simple start, where `brand-black` is used for backgrounds and primary headings,
    // let's change some to `brand-blue`.
    // Wait, it's safer to use the multi_replace_file_content tool file-by-file for semantic accuracy.
    console.log(`Prepared ${filePath}`);
  });
};

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

// walkSync(directoryPath).filter(f => f.endsWith('.tsx')).forEach(file => replaceInFile(file));
console.log('Use tools instead of aggressive script replacements');
