const fs = require('fs');
const path = require('path');

function run() {
  const root = __dirname;
  const frontendDir = path.join(root, 'frontend');
  const backendDir = path.join(root, 'backend');
  
  // Create frontend/lib
  const frontendLib = path.join(frontendDir, 'lib');
  if (!fs.existsSync(frontendLib)) fs.mkdirSync(frontendLib);
  
  // Move cn.ts and constants.ts back to frontend/lib
  const backendLib = path.join(backendDir, 'lib');
  if (fs.existsSync(path.join(backendLib, 'cn.ts'))) {
    fs.renameSync(path.join(backendLib, 'cn.ts'), path.join(frontendLib, 'cn.ts'));
  }
  if (fs.existsSync(path.join(backendLib, 'constants.ts'))) {
    fs.renameSync(path.join(backendLib, 'constants.ts'), path.join(frontendLib, 'constants.ts'));
  }
  
  // Rename backend/lib/mock-data to backend/data
  if (fs.existsSync(path.join(backendLib, 'mock-data'))) {
    fs.renameSync(path.join(backendLib, 'mock-data'), path.join(backendDir, 'data'));
  }
  
  // Remove backend/lib
  if (fs.existsSync(backendLib)) {
    fs.rmdirSync(backendLib);
  }
  
  // Update tsconfig.json in frontend to resolve backend paths
  const tsConfigPath = path.join(frontendDir, 'tsconfig.json');
  if (fs.existsSync(tsConfigPath)) {
    let tsConfig = fs.readFileSync(tsConfigPath, 'utf8');
    // Replace "@/*": ["./*"] with "@/*": ["./*"], "@/backend/*": ["../backend/*"]
    tsConfig = tsConfig.replace('"@/*": ["./*"]', '"@/*": ["./*"],\n      "@/backend/*": ["../backend/*"]');
    fs.writeFileSync(tsConfigPath, tsConfig);
  }
  console.log('Fixed lib and tsconfig');
}

run();
