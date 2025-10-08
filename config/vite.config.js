/**
 * Vite 主要配置檔案
 * 用於開發伺服器和完整建置（包含 HTML、CSS、JS）
 * 執行命令：npm run dev, npm run build
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

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
            return 'assets/css/[name].[hash][extname]'  // CSS 檔案放在 assets/css/
          } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'].includes(ext)) {
            return 'assets/images/[name].[hash][extname]'  // 圖片檔案放在 assets/images/
          }
          return 'assets/[name].[hash][extname]'  // 其他檔案放在 assets/
        },
        
        // JavaScript 檔案命名規則
        chunkFileNames: 'assets/js/[name].[hash].js',    // 分割的 JS 檔案
        entryFileNames: 'assets/js/[name].[hash].js'     // 入口 JS 檔案
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
