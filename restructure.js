const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run() {
  const root = __dirname;
  
  // 1. Create frontend and backend directories
  const frontendDir = path.join(root, 'frontend');
  const backendDir = path.join(root, 'backend');
  
  if (!fs.existsSync(backendDir)) fs.mkdirSync(backendDir);
  
  // 2. We need to reconstruct the Next.js app structure in `frontend`
  // Right now, `frontend` has the contents of `app` mixed with the root folders.
  // We need to move `auth`, `colleges`, `compare`, `components`, `saved`, `favicon.ico`, `globals.css`, `layout.tsx`, `not-found.tsx`, `page.tsx`, `providers.tsx` into `frontend/app`.
  
  const appDir = path.join(frontendDir, 'app');
  if (!fs.existsSync(appDir)) fs.mkdirSync(appDir);
  
  const appItems = ['auth', 'colleges', 'compare', 'saved', 'favicon.ico', 'globals.css', 'layout.tsx', 'not-found.tsx', 'page.tsx', 'providers.tsx'];
  for (const item of appItems) {
    const src = path.join(frontendDir, item);
    if (fs.existsSync(src)) {
      fs.renameSync(src, path.join(appDir, item));
    }
  }
  
  // The `components` folder in `frontend` is currently what was `app/components`. We should rename it to `app/components` and then move the root `components` to `frontend/components`.
  if (fs.existsSync(path.join(frontendDir, 'components'))) {
    fs.renameSync(path.join(frontendDir, 'components'), path.join(appDir, 'components'));
  }
  
  // Move root folders to frontend
  const frontendRootItems = ['components', 'package.json', 'package-lock.json', 'tsconfig.json', '.gitignore', 'README.md'];
  for (const item of frontendRootItems) {
    const src = path.join(root, item);
    if (fs.existsSync(src)) {
      fs.renameSync(src, path.join(frontendDir, item));
    }
  }
  
  // 3. Move backend folders
  const backendItems = ['services', 'lib'];
  for (const item of backendItems) {
    const src = path.join(root, item);
    if (fs.existsSync(src)) {
      fs.renameSync(src, path.join(backendDir, item));
    }
  }
  
  // 4. Create root workspace package.json
  const workspacePkg = {
    "name": "college-discovery-workspace",
    "private": true,
    "workspaces": [
      "frontend",
      "backend"
    ]
  };
  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(workspacePkg, null, 2));
  
  // 5. Create backend package.json
  const backendPkg = {
    "name": "backend",
    "version": "1.0.0",
    "main": "index.js",
    "dependencies": {}
  };
  fs.writeFileSync(path.join(backendDir, 'package.json'), JSON.stringify(backendPkg, null, 2));
  
  // 6. Update frontend package.json to depend on backend
  const frontendPkgPath = path.join(frontendDir, 'package.json');
  if (fs.existsSync(frontendPkgPath)) {
    const frontendPkg = JSON.parse(fs.readFileSync(frontendPkgPath, 'utf8'));
    frontendPkg.dependencies['backend'] = "*";
    fs.writeFileSync(frontendPkgPath, JSON.stringify(frontendPkg, null, 2));
  }
  
  console.log('Restructure complete!');
}

run();
