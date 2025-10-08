/**
 * Vite 簡化 CSS 建置配置檔案
 * 專門用於編譯 SCSS 檔案為 CSS，不處理 HTML 和 JS
 * 執行命令：npm run build:css
 */
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // ===========================================
  // 建置配置（僅 CSS）
  // ===========================================
  build: {
    // 輸出目錄：CSS 檔案會放在 dist/css 資料夾
    outDir: 'dist/css',
    
    // Rollup 配置：控制如何打包檔案
    rollupOptions: {
      // 輸入檔案：只編譯主要的 SCSS 檔案
      input: {
        'main': resolve(__dirname, '../src/scss/main.scss'),  // 主要 SCSS 檔案
      },
      
      // 輸出檔案命名規則
      output: {
        // 輸出為 CSS 檔案：不添加 hash，保持原始檔名
        entryFileNames: '[name].css',    // 輸出檔名格式：main.css
        assetFileNames: '[name].[ext]'   // 資源檔名格式：保持原始副檔名
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
