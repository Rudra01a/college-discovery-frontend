const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (f === 'node_modules' || f === '.next') return;
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const frontendDir = path.join(__dirname, 'frontend');

const codeKeywords = [
  'const ', 'let ', 'var ', 'export ', 'function ', 'return ', 'if ', 'try ',
  'import ', 'type ', 'interface ', 'class ', '<div', '<span', '<button', '<Link', '<a', '<p', '<h', '<Image', '<svg', '<article', '<aside', '<form', '<input'
];

walk(frontendDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Split by //
    let parts = content.split('//');
    for (let i = 1; i < parts.length; i++) {
      let part = parts[i];
      // Find where the code likely starts
      let earliestCodeIndex = part.length;
      let matchedKeyword = null;
      for (const kw of codeKeywords) {
        let idx = part.indexOf(kw);
        if (idx !== -1 && idx < earliestCodeIndex) {
          earliestCodeIndex = idx;
          matchedKeyword = kw;
        }
      }
      
      if (earliestCodeIndex !== part.length) {
        // Insert a newline before the code
        parts[i] = part.substring(0, earliestCodeIndex) + '\n' + part.substring(earliestCodeIndex);
      }
    }
    
    content = parts.join('//');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Fixed comments in ' + filePath);
    }
  }
});
