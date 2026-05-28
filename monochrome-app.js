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

const frontendDir = path.join(__dirname, 'frontend', 'app');

walk(frontendDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/dark:[a-zA-Z0-9\-\/\[\]#]+/g, '');
    content = content.replace(/\s{2,}/g, ' ');

    const colorMap = {
      'text-slate-900': 'text-[#111111]',
      'text-slate-800': 'text-[#111111]',
      'text-slate-700': 'text-[#444444]',
      'text-slate-600': 'text-[#444444]',
      'text-slate-500': 'text-[#6b7280]',
      'text-slate-400': 'text-[#6b7280]',
      'border-slate-300': 'border-gray-200',
      'border-slate-200': 'border-gray-200',
      'border-slate-100': 'border-gray-100',
      'bg-slate-50': 'bg-gray-50',
      'bg-slate-100': 'bg-gray-100',
      'bg-slate-200': 'bg-gray-200',
      'bg-brand-600': 'bg-[#111111]',
      'text-brand-600': 'text-[#111111]',
      'text-brand-700': 'text-[#111111]',
      'border-brand-300': 'border-gray-300',
      'hover:text-brand-600': 'hover:text-black',
      'hover:bg-brand-50': 'hover:bg-gray-50',
      'group-hover:text-brand-600': 'group-hover:text-black',
      'text-brand-500': 'text-[#444444]',
      'bg-brand-50': 'bg-gray-50',
      'bg-brand-700': 'bg-[#111111]',
      'bg-brand-800': 'bg-[#111111]',
      'bg-brand-900': 'bg-[#111111]',
    };

    for (const [oldClass, newClass] of Object.entries(colorMap)) {
      const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
      content = content.replace(regex, newClass);
    }

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log('Processed ' + filePath);
    }
  }
});
