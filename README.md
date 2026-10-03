# Your Portfolio Website: Setup Guide

No coding needed. You edit **one file** (`content.js`) and drop pictures into one folder.

## What is in this folder

| Item | What it is |
|---|---|
| `content.js` | **All your text.** Edit this to change anything on the site. |
| `images/drawings/` | Your drawing pictures. |
| `downloads/` | Your CV (PDF) and the original `.dwg` files. |
| `index.html`, `css/`, `js/` | The website itself. Leave these alone. |
| `.nojekyll` | Tells GitHub to publish the files as they are. Keep it. |

## Put it online (one time, about 5 minutes)

1. Create a free account at **github.com** and sign in.
2. Click **+** (top right) → **New repository**.
   - Name: `portfolio` (or `yourname.github.io` for a shorter address).
   - Choose **Public**, then click **Create repository**.
3. On the new repository page click **uploading an existing file**.
4. Open this folder on your computer, select **everything inside it** (including the `images`, `css`, `js`, `downloads` folders and the `.nojekyll` file) and drag it into the browser.
   *Tip: drag the contents, not the outer folder, so `index.html` sits at the top level.*
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Branch** choose `main` and `/ (root)`, then **Save**.
7. Wait 1 to 2 minutes and refresh. Your address will be shown at the top:
   - `https://YOURNAME.github.io/portfolio/`
   - or `https://YOURNAME.github.io/` if you named the repository `YOURNAME.github.io`.

## Everyday edits

Open `content.js` on GitHub, click the **pencil icon**, change the text, then click **Commit changes**. The site updates in about a minute.

Rules: only change text between the "quote marks". Keep the commas and brackets.

**Change a job, project or skill:** edit the text in its section.

**Add a new job / project / education line:** copy one whole `{ ... },` block, paste it below, and change the text.

**Add a new drawing:**
1. Save the drawing as an image (`.webp`, `.jpg` or `.png`, ideally under 1400 pixels wide and under 300 KB).
2. Upload it into `images/drawings/` (Add file → Upload files).
3. In `content.js`, copy one line in the `drawings` list and change `file`, `title` and `caption`. The file name must match exactly, including capital letters.

**Remove a drawing:** delete its line in `content.js`.

**Update your CV:** upload a new PDF into `downloads/` with the same name `Manu_Vishwakarma_CV.pdf` (it replaces the old one).

**Change colours:** open `css/style.css`; the first 10 lines hold the colours. `--accent` is the main blue.

## If something looks wrong

- **Blank page or missing sections:** you probably deleted a quote mark or comma in `content.js`. Compare with the examples around it.
- **A drawing shows a broken icon:** the file name in `content.js` does not match the file in `images/drawings/`.
- **Changes not showing:** wait a minute and do a hard refresh (Ctrl+Shift+R, or close and reopen the page on a phone).

## Preview on your own computer

Double-click `index.html`. It opens in your browser exactly as it will look online.
