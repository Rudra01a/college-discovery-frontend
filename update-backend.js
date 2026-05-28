const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'backend', 'services');

fs.readdirSync(servicesDir).forEach(f => {
  if (f.endsWith('.ts')) {
    let filePath = path.join(servicesDir, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // In backend/services, types are still imported from frontend/types if we didn't move types.
    // Wait, the types folder is in frontend. So `@/types/...` must map to `../../frontend/types/...` OR we can leave it as `@/types` and add paths alias to backend.
    // Let's just fix the mock-data import.
    content = content.replace(/@\/lib\/mock-data\//g, '../data/');
    
    // Fix types import to point to frontend types, or rely on tsconfig if we had one. Backend has no tsconfig right now.
    // Let's use relative imports for types.
    content = content.replace(/@\/types\//g, '../../frontend/types/');
    
    fs.writeFileSync(filePath, content);
    console.log('Updated ' + filePath);
  }
});
