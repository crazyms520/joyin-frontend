/**
 * Vite 主要配置檔案
 * 用於開發伺服器和完整建置（包含 HTML、CSS、JS）
 * 執行命令：npm run dev, npm run build
 */
import { defineConfig } from 'vite'
import { resolve, join } from 'path'
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'

// 處理 CSS 文件中圖片路徑的插件
// 將路徑 "../images/" 轉換為相對路徑 "../../images/"
function fixCssImagePaths() {
  return {
    name: 'fix-css-image-paths',
    writeBundle() {
      // #region agent log
      try {
        const logPath = resolve(__dirname, '../.cursor/debug.log')
        const logEntry = JSON.stringify({
          location: 'vite.config.js:writeBundle',
          message: 'writeBundle hook called',
          data: { outDir: '../dist' },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'build',
          hypothesisId: 'F'
        }) + '\n'
        require('fs').appendFileSync(logPath, logEntry, 'utf8')
      } catch (e) {}
      // #endregion
      
      // 構建完成後，處理所有 CSS 文件
      const distPath = resolve(__dirname, '../dist')
      const cssDir = join(distPath, 'assets', 'css')
      let cssFiles = []
      
      try {
        const files = readdirSync(cssDir)
        cssFiles = files
          .filter(file => file.endsWith('.css'))
          .map(file => join(cssDir, file))
      } catch (error) {
        console.warn('無法讀取 CSS 目錄:', error)
      }
      
      // #region agent log
      try {
        const logPath = resolve(__dirname, '../.cursor/debug.log')
        const logEntry = JSON.stringify({
          location: 'vite.config.js:writeBundle',
          message: 'Found CSS files',
          data: { count: cssFiles.length, files: cssFiles.map(f => f.replace(distPath, '')) },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'build',
          hypothesisId: 'F'
        }) + '\n'
        require('fs').appendFileSync(logPath, logEntry, 'utf8')
      } catch (e) {}
      // #endregion
      
      cssFiles.forEach(cssFile => {
        try {
          let content = readFileSync(cssFile, 'utf8')
          const originalContent = content
          
          // 匹配 url("../images/ 或 url('../images/ 或 url(../images/
          content = content.replace(/url\((["']?)\.\.\/images\//g, 'url($1../../images/')
          
          if (content !== originalContent) {
            writeFileSync(cssFile, content, 'utf8')
            // #region agent log
            try {
              const logPath = resolve(__dirname, '../.cursor/debug.log')
              const logEntry = JSON.stringify({
                location: 'vite.config.js:writeBundle',
                message: 'Fixed CSS image paths',
                data: { file: cssFile.replace(distPath, '') },
                timestamp: Date.now(),
                sessionId: 'debug-session',
                runId: 'build',
                hypothesisId: 'F'
              }) + '\n'
              require('fs').appendFileSync(logPath, logEntry, 'utf8')
            } catch (e) {}
            // #endregion
          }
        } catch (error) {
          console.error(`處理 CSS 文件失敗: ${cssFile}`, error)
        }
      })
    }
  }
}

// 處理 html 文件中css 與 js路徑的插件
// 將路徑 "./assets/css" 轉換為相對路徑 "assets/css"
// 將路徑 "./assets/js" 轉換為相對路徑 "assets/js"
function fixHtmlCssJsPaths() {
  return {
    name: 'fix-html-css-js-paths',
    writeBundle() {
      // 構建完成後，處理所有 HTML 文件
      const distPath = resolve(__dirname, '../dist')
      let htmlFiles = []
      
      try {
        const files = readdirSync(distPath)
        htmlFiles = files
          .filter(file => file.endsWith('.html'))
          .map(file => join(distPath, file))
      } catch (error) {
        console.warn('無法讀取 dist 目錄:', error)
      }
      
      htmlFiles.forEach(htmlFile => {
        try {
          let content = readFileSync(htmlFile, 'utf8')
          const originalContent = content
          
          // 將 "./assets/css" 轉換為 "assets/css"
          content = content.replace(/\.\/assets\/css/g, 'assets/css')
          // 將 "./assets/js" 轉換為 "assets/js"
          content = content.replace(/\.\/assets\/js/g, 'assets/js')
          // 將 "./images/" 轉換為 "images/"
          content = content.replace(/\.\/images\//g, 'images/')
          
          if (content !== originalContent) {
            writeFileSync(htmlFile, content, 'utf8')
            console.log(`已修正 HTML 檔案中的資源路徑: ${htmlFile.replace(distPath, '')}`)
          }
        } catch (error) {
          console.error(`處理 HTML 文件失敗: ${htmlFile}`, error)
        }
      })
    }
  }
}

export default defineConfig({
  // ===========================================
  // 基礎路徑設定
  // ===========================================
  base: './',  // 設定為相對路徑，讓建置後的檔案可以放在任何位置

  // ===========================================
  // 專案根目錄設定
  // ===========================================
  root: 'views', // 設定專案根目錄為 views 資料夾，讓網址可以直接使用 xxx.html
  publicDir: resolve(__dirname, '../public'), // 設定 public 目錄

  // ===========================================
  // 插件配置
  // ===========================================
  plugins: [
    fixCssImagePaths(),  // 修正 CSS 文件中的圖片路徑
    fixHtmlCssJsPaths()  // 修正 html 文件中css 與 js路徑
  ],

  // ===========================================
  // 路徑解析設定
  // ===========================================
  resolve: {
    alias: {
      // 設定路徑別名，讓 HTML 檔案可以使用絕對路徑引用 src 目錄
      '@': resolve(__dirname, '../src'),        // @ 指向 src 目錄（從 config 資料夾向上）
      '/src': resolve(__dirname, '../src'),     // /src 指向 src 目錄（用於 HTML 中的絕對路徑）
    }
  },

  // ===========================================
  // 建置配置
  // ===========================================
  build: {
    // 輸出目錄：建置後的檔案會放在專案根目錄的 dist 資料夾
    // 因為 root: 'views'，所以需要 '../dist' 從 views/ 往上到專案根目錄
    outDir: '../dist',
    
    // 資源目錄：CSS、JS、圖片等資源會放在 dist/assets 資料夾
    assetsDir: 'assets',
    
    // Rollup 配置：控制如何打包檔案
    rollupOptions: {
      // 多頁面入口配置：定義所有需要建置的 HTML 檔案
      input: {
        index: resolve(__dirname, '../views/index.html'),        // 首頁
        about: resolve(__dirname, '../views/about.html'),        // 關於我們
        coupon: resolve(__dirname, '../views/coupon.html'),      // 優惠券平台
        lbs: resolve(__dirname, '../views/lbs.html'),            // 周邊好康
        game: resolve(__dirname, '../views/game.html'),          // 任務遊戲
        case: resolve(__dirname, '../views/case.html'),          // 成功案例
        contact: resolve(__dirname, '../views/contact.html'),    // 聯絡我們
      },
      
      // 輸出檔案命名規則
      output: {
        // 資源檔案命名規則：根據檔案類型決定存放位置
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()
          if (ext === 'css') {
            return 'assets/css/[name][extname]'  // CSS 檔案放在 assets/css/（不使用 hash）
          } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'].includes(ext)) {
            return 'images/[name][extname]'  // 圖片檔案放在 images/（匹配 publicDir 的實際位置，不使用 hash）
          }
          return 'assets/[name][extname]'  // 其他檔案放在 assets/（不使用 hash）
        },
        
        // JavaScript 檔案命名規則（不使用 hash）
        chunkFileNames: 'assets/js/[name].js',    // 分割的 JS 檔案
        entryFileNames: 'assets/js/[name].js'     // 入口 JS 檔案
      }
    }
  },
  
  // ===========================================
  // CSS 預處理器配置
  // ===========================================
  css: {
    preprocessorOptions: {
      scss: {
        // 全域 SCSS 變數：每個 SCSS 檔案都會自動注入這些變數
        additionalData: `
          $enable-deprecation-messages: false;  // 關閉 Bootstrap 的棄用警告
        `,
        
        // 輸出樣式：expanded 表示展開的 CSS（易讀），compressed 表示壓縮的 CSS
        outputStyle: 'expanded'
      }
    }
  },
  
  // ===========================================
  // 開發伺服器配置
  // ===========================================
  server: {
    port: 5173,    // 開發伺服器端口
    open: true     // 自動開啟瀏覽器
  }
})
