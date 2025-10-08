/**
 * Vite SCSS 專用建置配置檔案
 * 專門用於編譯多個 SCSS 檔案為 CSS，支援個別頁面的樣式檔案
 * 執行命令：npm run build:scss
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // ===========================================
  // 建置配置（多個 SCSS 檔案）
  // ===========================================
  build: {
    // 輸出目錄：CSS 檔案會放在 dist 資料夾
    outDir: 'dist',
    
    // 資源目錄：CSS 檔案會放在 dist/assets/css 資料夾
    assetsDir: 'assets',
    
    // Rollup 配置：控制如何打包檔案
    rollupOptions: {
      // 輸入檔案：編譯多個 SCSS 檔案
      input: {
        'index-css': resolve(__dirname, '../src/styles/page/index.scss'),                    // 主要樣式
        'about-css': resolve(__dirname, '../src/styles/page/about.scss'),                    // 主要樣式
        'coupon-css': resolve(__dirname, '../src/styles/page/coupon.scss'),                    // 主要樣式
        'lbs-css': resolve(__dirname, '../src/styles/page/lbs.scss'),                    // 主要樣式
        'game-css': resolve(__dirname, '../src/styles/page/game.scss'),                    // 主要樣式
        'case-css': resolve(__dirname, '../src/styles/page/case.scss'),                    // 主要樣式
        'contact-css': resolve(__dirname, '../src/styles/page/contact.scss'),                    // 主要樣式
        // 'main-css': resolve(__dirname, '../src/styles/main.scss'),                    // 主要樣式
        // 'minimal-bootstrap-css': resolve(__dirname, '../src/styles/minimal-bootstrap.scss'), // 最小化 Bootstrap
        // 'dashboard-css': resolve(__dirname, '../src/styles/dashboard.scss'),         // 儀表板樣式
        // 'landing-css': resolve(__dirname, '../src/styles/landing.scss'),             // 登陸頁樣式
        // 'admin-css': resolve(__dirname, '../src/styles/admin.scss'),                 // 管理後台樣式
        // 'mobile-css': resolve(__dirname, '../src/scss/mobile.scss'),               // 行動版樣式
      },
      
      // 輸出檔案命名規則
      output: {
        // CSS 檔案命名規則：添加 hash 值用於快取控制
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name].[hash][extname]'  // CSS 檔案放在 assets/css/ 並添加 hash
          }
          return 'assets/[name].[hash][extname]'  // 其他檔案放在 assets/
        }
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
  }
})
