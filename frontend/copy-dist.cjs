const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, 'dist')
const dest = path.resolve(__dirname, '..', 'server', 'src', 'main', 'resources', 'static')

function copyRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name)
    const destPath = path.join(destDir, entry.name)
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

try {
  copyRecursive(src, dest)
  console.log('Copied frontend/dist -> backend static')
} catch (e) {
  console.error('Error copying dist:', e)
  process.exit(1)
}
