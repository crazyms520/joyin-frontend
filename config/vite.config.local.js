/**
 * Vite 本地建置配置檔案
 * 用於本地開發環境的建置（不設定 root，使用標準專案結構）
 * 執行命令：npm run build:local
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

// 移除 crossorigin 屬性的插件
function removeCrossorigin() {
  return {
    name: 'remove-crossorigin',
    transformIndexHtml(html) {
      // 移除所有 crossorigin 屬性
      return html.replace(/\s*crossorigin\s*/g, ' ')
    }
  }
}

export default defineConfig({
  // ===========================================
  // 模式設定
  // ===========================================
  mode: 'development',  // 設定為 development 模式

  // ===========================================
  // 基礎路徑設定
  // ===========================================
  base: './',  // 設定為相對路徑，讓建置後的檔案可以放在任何位置
  publicDir: resolve(__dirname, '../public'),

  // ===========================================
  // 插件配置
  // ===========================================
  plugins: [
    removeCrossorigin()  // 使用自訂插件移除 crossorigin 屬性
  ],

  // ===========================================
  // 建置配置
  // ===========================================
  build: {
    // 輸出目錄：建置後的檔案會放在 dist 資料夾
    outDir: 'development',
    
    // 資源目錄：CSS、JS、圖片等資源會放在 dist/assets 資料夾
    assetsDir: 'assets',
    emptyOutDir: true,
    
    // Development 模式設定
    minify: false,          // 不壓縮程式碼
    sourcemap: true,        // 生成 source map
    
    // Rollup 配置：控制如何打包檔案
    rollupOptions: {
      // 多頁面入口配置：定義所有需要建置的 HTML 檔案
      input: {
        index: resolve(__dirname, '../views/index.html'),        // 首頁
        about: resolve(__dirname, '../views/about.html'),        // 關於我們
        coupon: resolve(__dirname, '../views/coupon.html'),        // 優惠券平台
        lbs: resolve(__dirname, '../views/lbs.html'),        // 周邊好康
        game: resolve(__dirname, '../views/game.html'),        // 任務遊戲
        case: resolve(__dirname, '../views/case.html'),        // 成功案例
        contact: resolve(__dirname, '../views/contact.html'),        // 聯絡我們
        // test: resolve(__dirname, '../views/test.html'),         // 測試頁面
        // dashboard: resolve(__dirname, '../views/dashboard.html'), // 儀表板
        // landing: resolve(__dirname, '../views/landing.html'),   // 登陸頁
        // admin: resolve(__dirname, '../views/admin.html'),       // 管理後台
        // mobile: resolve(__dirname, '../views/mobile.html'),     // 行動版
      },
      
      // 輸出檔案命名規則
      output: {
        // JavaScript 檔案命名規則（development 模式不使用 hash）
        chunkFileNames: 'assets/js/[name].js',    // 分割的 JS 檔案
        entryFileNames: 'assets/js/[name].js',     // 入口 JS 檔案
        // 資源檔案命名規則：根據檔案類型決定存放位置
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()
          if (ext === 'css') {
            return 'assets/css/[name][extname]'  // CSS 檔案放在 assets/css/（不使用 hash）
          } else if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'ico'].includes(ext)) {
            return 'assets/images/[name][extname]'  // 圖片檔案放在 assets/images/（不使用 hash）
          }
          return 'assets/[name][extname]'  // 其他檔案放在 assets/（不使用 hash）
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
    },
    // Development 模式下啟用 source map
    devSourcemap: true
  },
  
  // ===========================================
  // 開發伺服器配置
  // ===========================================
  server: {
    port: 5173,    // 開發伺服器端口
    open: true     // 自動開啟瀏覽器
  }
})
