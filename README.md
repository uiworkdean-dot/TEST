# RICH & ROLL｜火球祭 HTML / CSS / JS / RWD

本版本以 `Index.pdf` 為唯一視覺素材來源。PDF 為 1 頁、1920 × 3180 設計稿；其中的圖片與透明遮罩已抽出成 PNG，再以 HTML + CSS 重新組版。

## 內容
- `index.html`：HTML 結構
- `css/style.css`：桌機 / 手機 RWD
- `js/script.js`：GA4 / GTM `dataLayer` hook
- `assets/`：從 PDF 直接抽出的透明 PNG 素材
- `.nojekyll`：GitHub Pages

## GitHub Pages
把資料夾內容上傳至 GitHub Repository 根目錄，然後：
Settings → Pages → Deploy from a branch → main → / (root)

## GA
目前只放入通用 dataLayer 結構，尚未假設你們公司真正的 GA event / parameter 規則。收到正式 GTM 規則後可直接替換。
