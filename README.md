# Joyin Frontend - 多頁面 Bootstrap 專案

這是一個展示如何根據不同頁面需求，引入不同 Bootstrap 工具、CSS 和其他套件的前端專案。

## 📋 專案概述

本專案使用 Vite 作為建構工具，展示如何為不同類型的頁面配置不同的 Bootstrap 元件和樣式，實現按需引入和效能優化。

## 📁 專案結構

```
joyin-frontend/
├── src/
│   ├── scss/                    # SCSS 樣式檔案
│   │   ├── main.scss           # 完整 Bootstrap 引入
│   │   ├── minimal-bootstrap.scss  # 最小化 Bootstrap
│   │   ├── dashboard.scss       # 儀表板頁面樣式
│   │   ├── landing.scss        # 登陸頁面樣式
│   │   ├── admin.scss          # 管理後台樣式
│   │   └── mobile.scss         # 行動版頁面樣式
│   ├── css/
│   │   └── test.css           # 自定義 CSS 樣式
│   └── js/
│       └── test.js            # JavaScript 功能模組
├── dist/                       # 建構輸出目錄
├── *.html                     # 多頁面 HTML 檔案
├── vite.config.js             # Vite 主要配置
├── vite.config.local.js       # 本地建構配置
├── vite.config.scss.js        # SCSS 專用配置
└── package.json               # 專案依賴和腳本
```

## 🎯 不同頁面的設計理念

### 1. 儀表板頁面 (`dashboard.scss`)
**適用場景：** 數據展示、圖表、複雜互動
**特點：**
- 引入完整的 Bootstrap 元件
- 包含所有互動元件（模態框、工具提示、彈出框等）
- 專為數據可視化設計
- 支援複雜的用戶介面

**包含的 Bootstrap 元件：**
- 所有基礎元件（按鈕、表單、卡片等）
- 進階元件（模態框、工具提示、彈出框）
- 數據展示元件（表格、分頁、進度條）
- 互動元件（輪播、手風琴、下拉選單）

### 2. 登陸頁面 (`landing.scss`)
**適用場景：** 行銷頁面、產品展示、快速載入
**特點：**
- 只引入必要的輕量級元件
- 優化載入速度
- 專注於轉換率優化
- 響應式設計

**包含的 Bootstrap 元件：**
- 基礎元件（按鈕、表單、卡片）
- 導航元件（導航列、導航）
- 展示元件（警告框、徽章）
- 動畫效果（過渡動畫）

### 3. 管理後台 (`admin.scss`)
**適用場景：** 後台管理、數據處理、CRUD 操作
**特點：**
- 專注於表格和表單元件
- 包含所有管理功能需要的元件
- 優化數據操作體驗
- 支援大量數據展示

**包含的 Bootstrap 元件：**
- 表格相關（表格、分頁、排序）
- 表單相關（表單控制項、驗證）
- 管理功能（模態框、下拉選單、工具提示）
- 導航（麵包屑、導航列）

### 4. 行動版頁面 (`mobile.scss`)
**適用場景：** 手機應用、響應式設計、觸控操作
**特點：**
- 優化觸控操作
- 大尺寸按鈕和表單
- 行動優先設計
- 簡化的用戶介面

**包含的 Bootstrap 元件：**
- 觸控優化元件（大按鈕、觸控友善表單）
- 行動導航（側邊欄、底部導航）
- 簡化元件（卡片、列表群組）
- 響應式元件（摺疊、手風琴）

## 🚀 快速開始

### 1. 安裝依賴
```bash
npm install
```

### 2. 開發模式
```bash
npm run dev
```

### 3. 建構專案
```bash
# 建構所有頁面（適合部署到伺服器）
npm run build

# 建構本地測試版本（可直接開啟 HTML 檔案）
npm run build:local

# 只建構 SCSS 檔案
npm run build:scss

# 建構所有檔案
npm run build:all
```

## 📊 Bootstrap 元件說明

### 核心檔案（必須保留）
```scss
@import "bootstrap/scss/functions";    // Bootstrap 函數
@import "bootstrap/scss/variables";    // Bootstrap 變數
@import "bootstrap/scss/maps";         // Bootstrap 地圖
@import "bootstrap/scss/mixins";       // Bootstrap Mixins
@import "bootstrap/scss/utilities";    // Bootstrap 工具函數
```

### 基礎樣式（建議保留）
```scss
@import "bootstrap/scss/root";          // CSS 自定義屬性
@import "bootstrap/scss/reboot";       // 重置樣式
@import "bootstrap/scss/type";         // 排版樣式
@import "bootstrap/scss/images";       // 圖片樣式
@import "bootstrap/scss/containers";    // 容器
@import "bootstrap/scss/grid";          // 網格系統
```

### 可選元件（根據需要刪減）

| 元件 | 用途 | 如果不用可以刪除 |
|------|------|------------------|
| `tables` | 表格、資料展示 | ✅ |
| `forms` | 輸入框、選擇器、核取方塊等 | ✅ |
| `buttons` | 按鈕、連結按鈕 | ✅ |
| `transitions` | 所有動畫效果 | ✅ |
| `dropdown` | 下拉選單、選單 | ✅ |
| `button-group` | 按鈕群組、工具列 | ✅ |
| `nav` | 導航選單、導航欄 | ✅ |
| `card` | 內容卡片、產品卡片 | ✅ |
| `accordion` | 摺疊內容、FAQ | ✅ |
| `breadcrumb` | 頁面路徑導航 | ✅ |
| `pagination` | 分頁導航 | ✅ |
| `badge` | 標籤、計數器 | ✅ |
| `alert` | 提示訊息、通知 | ✅ |
| `progress` | 進度指示器 | ✅ |
| `list-group` | 列表、選單列表 | ✅ |
| `close` | 關閉按鈕、X 按鈕 | ✅ |
| `toast` | 彈出通知 | ✅ |
| `modal` | 彈出視窗、對話框 | ✅ |
| `tooltip` | 懸停提示 | ✅ |
| `popover` | 彈出內容框 | ✅ |
| `carousel` | 圖片輪播、內容輪播 | ✅ |
| `spinners` | 載入指示器 | ✅ |
| `offcanvas`` | 側邊欄、抽屜選單 | ✅ |
| `placeholders` | 載入佔位符 | ✅ |

### 工具類別（建議保留）
```scss
@import "bootstrap/scss/helpers";       // 工具類別
@import "bootstrap/scss/utilities/api"; // 工具類別 API
```

## 🎨 自定義變數

每個 SCSS 檔案都包含專用的變數設定：

### 儀表板頁面變數
```scss
$dashboard-primary: #2c3e50;
$dashboard-secondary: #34495e;
$dashboard-success: #27ae60;
```

### 登陸頁面變數
```scss
$landing-primary: #ff6b6b;
$landing-secondary: #4ecdc4;
$landing-accent: #45b7d1;
```

### 管理後台變數
```scss
$admin-primary: #2c3e50;
$admin-secondary: #7f8c8d;
$admin-success: #27ae60;
```

### 行動版變數
```scss
$mobile-primary: #667eea;
$mobile-secondary: #764ba2;
$mobile-accent: #f093fb;
```

## 🔧 建構配置

### 檔案分類規則

建構後的檔案會按照以下結構存放：

```
dist/
├── assets/
│   ├── css/           # CSS 檔案
│   │   ├── main-css-[hash].css
│   │   ├── dashboard-css-[hash].css
│   │   ├── landing-css-[hash].css
│   │   ├── admin-css-[hash].css
│   │   └── mobile-css-[hash].css
│   ├── js/            # JavaScript 檔案
│   │   ├── main-[hash].js
│   │   ├── dashboard-[hash].js
│   │   ├── landing-[hash].js
│   │   ├── admin-[hash].js
│   │   └── mobile-[hash].js
│   └── images/        # 圖片檔案
│       ├── logo-[hash].png
│       └── banner-[hash].jpg
├── index.html
├── dashboard.html
├── landing.html
├── admin.html
└── mobile.html
```

### 建構指令說明

| 指令 | 用途 | 輸出 |
|------|------|------|
| `npm run dev` | 開發模式 | 熱重載開發伺服器 |
| `npm run build` | 生產建構 | 適合部署到伺服器 |
| `npm run build:local` | 本地測試建構 | 可直接開啟 HTML 檔案 |
| `npm run build:scss` | SCSS 建構 | 只編譯 SCSS 檔案 |
| `npm run build:all` | 完整建構 | 建構所有檔案 |

## 🎯 JavaScript 功能

### 主要功能特色

1. **按鈕互動功能**
   - 點擊動畫效果
   - Toast 通知系統
   - 防重複點擊保護

2. **表單驗證功能**
   - 即時驗證
   - 必填欄位檢查
   - 成功提示和自動清空

3. **動態計數器**
   - 即時更新
   - 動畫效果
   - 操作按鈕（增加/減少/重置）

4. **主題切換功能**
   - 深色/淺色模式
   - 完整元件支援
   - 狀態記憶

5. **鍵盤快捷鍵**
   - `Ctrl + Enter` - 提交表單
   - `Escape` - 關閉警告框
   - `1-3` - 快速觸發按鈕

### 技術特色

- **模組化設計：** ES6 模組語法
- **效能優化：** 防抖動和節流
- **用戶體驗：** 即時回饋和無障礙支援
- **響應式設計：** 行動裝置優化

## 📱 響應式設計

所有頁面都支援響應式設計：

- **桌面版：** 完整功能展示
- **平板版：** 適中的佈局調整
- **手機版：** 觸控優化設計

## 🚨 常見問題解決

### 1. 建構後檔案無法正確載入

**問題：** 建構後的 HTML 檔案直接開啟無法載入 CSS 和 JS

**解決方案：**
- 使用 `npm run build:local` 建構
- 或使用 CDN 資源（推薦）

### 2. SCSS 編譯錯誤

**問題：** 引入不存在的 Bootstrap 元件

**解決方案：**
- 檢查元件名稱是否正確
- 參考 Bootstrap 5 官方文件

### 3. 路徑問題

**問題：** 絕對路徑 vs 相對路徑

**解決方案：**
- 本地測試：使用 `base: './'`
- 伺服器部署：使用 `base: '/'`

## 📊 效能優化

### 按需引入
每個頁面只引入需要的 Bootstrap 元件，減少 CSS 檔案大小：

- **儀表板：** ~200KB（完整功能）
- **登陸頁：** ~80KB（輕量級）
- **管理後台：** ~120KB（表格導向）
- **行動版：** ~100KB（觸控優化）

### 建構優化
- CSS 檔案壓縮
- 資源檔案雜湊命名
- 自動移除未使用的 CSS

## 🎯 最佳實踐

1. **選擇合適的頁面類型：** 根據功能需求選擇對應的 SCSS 檔案
2. **自定義變數：** 修改各頁面的專用變數以符合品牌色彩
3. **響應式測試：** 在不同裝置上測試頁面效果
4. **效能監控：** 監控頁面載入速度和檔案大小
5. **漸進式增強：** 從基本功能開始，逐步添加進階功能

## 🔗 相關資源

- [Bootstrap 5 官方文件](https://getbootstrap.com/docs/5.3/)
- [Vite 官方文件](https://vitejs.dev/)
- [SCSS 官方文件](https://sass-lang.com/)
- [ES6 模組語法](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## 📝 注意事項

1. 確保在引入 SCSS 檔案前已安裝 Bootstrap 依賴
2. 自定義變數必須在引入 Bootstrap 之前定義
3. 建議在生產環境中啟用 CSS 壓縮
4. 定期更新 Bootstrap 版本以獲得最新功能和安全修復
5. 使用 CDN 時需要網路連線
6. 本地建構可直接開啟 HTML 檔案

## 📄 授權

本專案僅供學習和參考使用。
