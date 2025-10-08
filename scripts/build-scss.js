import { build } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 要編譯的 SCSS 檔案列表
const scssFiles = [
  'src/scss/main.scss',
  'src/scss/minimal-bootstrap.scss'
]

async function buildSCSS() {
  console.log('🚀 開始編譯 SCSS 檔案...')
  
  for (const scssFile of scssFiles) {
    try {
      console.log(`📦 編譯 ${scssFile}...`)
      
      await build({
        build: {
          outDir: 'dist/css',
          rollupOptions: {
            input: resolve(__dirname, '..', scssFile),
            output: {
              entryFileNames: '[name].css',
              assetFileNames: '[name].[ext]'
            }
          }
        },
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: `$enable-deprecation-messages: false;`,
              outputStyle: 'expanded'
            }
          }
        }
      })
      
      console.log(`✅ ${scssFile} 編譯完成`)
    } catch (error) {
      console.error(`❌ ${scssFile} 編譯失敗:`, error.message)
    }
  }
  
  console.log('🎉 所有 SCSS 檔案編譯完成！')
}

buildSCSS()
