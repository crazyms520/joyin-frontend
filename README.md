# Joyin Frontend - 企業官網前端專案

這是 Joyin 品牌的企業官網前端專案，使用 Vite 建構工具搭配 SCSS 進行開發，提供多個功能頁面展示。

## 📋 專案概述

本專案包含企業官網所需的多個頁面，包括首頁、關於我們、優惠券平台、周邊好康、任務遊戲、成功案例和聯絡我們。專案採用模組化 SCSS 架構，使用 Splide 套件實現輪播功能。

## 📁 專案結構

```
joyin-frontend/
├── views/                     # HTML 頁面檔案
│   ├── index.html            # 首頁
│   ├── about.html            # 關於我們
│   ├── coupon.html           # 優惠券平台
│   ├── lbs.html              # 周邊好康（LBS）
│   ├── game.html             # 任務遊戲
│   ├── case.html             # 成功案例
│   └── contact.html          # 聯絡我們
├── src/
│   ├── styles/               # SCSS 樣式檔案
│   │   ├── base/             # 基礎樣式
│   │   │   ├── _core.scss    # 核心樣式
│   │   │   ├── _variables.scss # 變數定義
│   │   │   ├── _components.scss # 共用元件
│   │   │   ├── _utilities.scss  # 工具類
│   │   │   └── _main.scss    # 主要樣式
│   │   ├── layout/           # 版面配置
│   │   │   ├── _header.scss  # Header 樣式
│   │   │   └── _footer.scss  # Footer 樣式
│   │   └── page/             # 各頁面專屬樣式
│   │       ├── index.scss    # 首頁樣式
│   │       ├── about.scss    # 關於我們樣式
│   │       ├── coupon.scss   # 優惠券平台樣式
│   │       ├── lbs.scss      # 周邊好康樣式
│   │       ├── game.scss     # 任務遊戲樣式
│   │       ├── case.scss     # 成功案例樣式
│   │       └── contact.scss  # 聯絡我們樣式
│   └── js/                   # JavaScript 檔案
│       ├── public.js         # 共用功能
│       ├── index.js          # 首頁功能
│       ├── about.js          # 關於我們功能
│       ├── game.js           # 遊戲功能
│       └── lbs.js            # LBS 功能
├── public/                   # 靜態資源
│   └── images/               # 圖片資源
│       ├── index/            # 首頁圖片
│       ├── about/            # 關於我們圖片
│       ├── coupon/           # 優惠券圖片
│       ├── lbs/              # LBS 圖片
│       ├── game/             # 遊戲圖片
│       ├── case/             # 案例圖片
│       ├── contact/          # 聯絡我們圖片
│       └── *.svg             # 共用圖標
├── config/                   # Vite 配置檔案
│   ├── vite.config.js        # 主要配置（開發 & 建置）
│   ├── vite.config.local.js  # 本地測試建置
│   ├── vite.config.scss.js   # SCSS 建置
│   └── vite.config.simple.js # 簡易 CSS 建置
├── scripts/                  # 建置腳本
│   └── build-scss.js         # SCSS 編譯腳本
├── dist/                     # 建構輸出目錄
└── package.json              # 專案依賴和腳本
```

## 🛠️ 技術堆疊

### 核心技術
- **建構工具：** Vite 7.1.12 (Rolldown-Vite)
- **CSS 預處理器：** Sass 1.93.2
- **UI 框架：** Bootstrap 5.3.3
- **輪播套件：** Splide 4.1.4
- **輪播擴展：** Splide Extension Grid 0.4.1
- **部署工具：** gh-pages 6.2.0

### 專案特色
- ✅ 多頁面應用架構
- ✅ 模組化 SCSS 架構設計
- ✅ 響應式設計
- ✅ 基於 Bootstrap 5 的現代化 UI
- ✅ Splide 輪播套件整合
- ✅ 快速開發與熱更新
- ✅ 生產環境優化建置
- ✅ 一鍵部署到 GitHub Pages

## 🚀 快速開始

### 1. 安裝依賴
```bash
npm install
```

### 2. 開發模式
```bash
# 啟動開發伺服器（預設在 http://localhost:5173）
npm run dev
```

開發伺服器啟動後，可以直接訪問各個頁面：
- http://localhost:5173/index.html
- http://localhost:5173/about.html
- http://localhost:5173/coupon.html
- http://localhost:5173/lbs.html
- http://localhost:5173/game.html
- http://localhost:5173/case.html
- http://localhost:5173/contact.html

### 3. 建構專案

```bash
# 標準建構（適合部署到伺服器）
npm run build

# 本地測試建構（可直接開啟 HTML 檔案）
npm run build:local

# 只建構 CSS 樣式
npm run build:css

# 只編譯 SCSS 檔案
npm run build:scss

# 使用 Node.js 腳本編譯 SCSS
npm run build:scss-only

# 完整建構（SCSS + 本地版本）
npm run build:all

# 預覽建構結果
npm run preview

# 部署到 GitHub Pages（使用 gh-pages 套件）
npm run deploy
```

## 🚀 部署到 GitHub Pages

### 使用 gh-pages 套件部署（推薦）

本專案已經設定好 `gh-pages` 套件，可以一鍵部署到 GitHub Pages。

#### 步驟 1：初始化 Git 並推送到 GitHub

```bash
# 初始化 Git（如果還沒有的話）
git init

# 添加所有檔案到暫存區
git add .

# 提交變更
git commit -m "Initial commit"

# 連結到 GitHub 遠端倉庫（替換為您的倉庫網址）
git remote add origin https://github.com/your-username/joyin-frontend.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 步驟 2：安裝 gh-pages 套件

```bash
npm install
```

> **注意：** `gh-pages` 套件已經在 `package.json` 中設定好了，執行 `npm install` 時會自動安裝。

#### 步驟 3：一鍵部署

```bash
npm run deploy
```

這個指令會執行以下操作：
1. 自動執行 `npm run build` 建構專案
2. 將 `dist` 資料夾的內容推送到 `gh-pages` 分支
3. GitHub Pages 會自動從 `gh-pages` 分支部署網站

#### 步驟 4：設定 GitHub Pages

1. 進入您的 GitHub 倉庫
2. 點擊 **Settings** > **Pages**
3. 在 **Source** 選擇 `gh-pages` 分支
4. 點擊 **Save**
5. 等待幾分鐘，您的網站就會上線！

網址格式：`https://your-username.github.io/joyin-frontend/`

### gh-pages 套件的優點

✅ **dist 保持被忽略**
- `dist` 資料夾可以繼續保留在 `.gitignore` 中
- 主分支保持乾淨，不會有建置檔案

✅ **自動化部署**
- 一個指令就完成建置和部署
- 不需要手動管理 dist 資料夾

✅ **獨立分支管理**
- 部署的檔案放在獨立的 `gh-pages` 分支
- 不會污染主分支的 commit 歷史

✅ **持續更新**
- 每次執行 `npm run deploy` 就會自動更新網站
- 支援增量部署，速度快

### 常見問題

#### Q1: 部署後網站無法正常顯示資源
**原因：** Vite 的 base 路徑設定問題

**解決方案：** 在 `config/vite.config.js` 中確認 base 路徑：

```javascript
export default defineConfig({
  base: './',  // 使用相對路徑（已設定）
  // 或者
  base: '/joyin-frontend/',  // 使用倉庫名稱作為 base path
})
```

如果您的倉庫名稱不是 `joyin-frontend`，需要修改為您的倉庫名稱。

#### Q2: 部署時出現權限錯誤
**解決方案：** 確認您已經登入 GitHub 並有推送權限
```bash
git config user.name "Your Name"
git config user.email "your-email@example.com"
```

#### Q3: 想要自訂網域
1. 在 `public` 資料夾中建立 `CNAME` 檔案
2. 在檔案中輸入您的網域（例如：`www.example.com`）
3. 重新執行 `npm run deploy`
4. 在網域提供商設定 DNS 指向 GitHub Pages

### 其他部署方式

如果您想使用 GitHub Actions 自動部署，可以參考以下設定：

在 `.github/workflows/deploy.yml` 建立檔案：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

這樣設定後，每次推送到 main 分支時會自動建置並部署。

## 📝 開發注意事項

### Git 工作流程

```bash
# 1. 開發新功能
npm run dev

# 2. 測試建置
npm run build
npm run preview

# 3. 提交變更到 Git
git add .
git commit -m "feat: add new feature"
git push origin main

# 4. 部署到 GitHub Pages
npm run deploy
```

### .gitignore 設定

以下是建議的 `.gitignore` 設定（已包含在專案中）：

```
# 依賴
node_modules

# 建置輸出
dist
dist-ssr

# 開發環境
*.local

# 系統檔案
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

**重要：** `dist` 資料夾保持在 `.gitignore` 中，gh-pages 套件會自動處理部署。

## 🔗 相關資源

- [Bootstrap 5 官方文件](https://getbootstrap.com/docs/5.3/)
- [Vite 官方文件](https://vitejs.dev/)
- [Sass 官方文件](https://sass-lang.com/)
- [Splide 官方文件](https://splidejs.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [gh-pages 套件](https://www.npmjs.com/package/gh-pages)
- [GitHub Pages 文件](https://docs.github.com/en/pages)

## 📄 授權

本專案為 Joyin 品牌官網展示專案。