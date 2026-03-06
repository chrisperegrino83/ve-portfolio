# VE Portfolio (Static Site)

Simple static HTML/CSS/JS portfolio for Values Education. Upload the contents of this folder as the site root.

## Structure
- index.html — main page
- styles.css — styles
- index.js — interactivity (theme toggle, background cycling, smooth scroll)
- project-pic/ — content images
- background-images/ — bg1.png … bg10.png for background cycling

## Quick Start
- Open index.html locally to preview.

## Deploy to Netlify (drag‑and‑drop)
1. Go to https://app.netlify.com/ and sign in.
2. Sites → Add new site → Deploy manually.
3. Drag this folder (dist) or upload a ZIP of its contents.
4. Rename the site under Site settings → General → Site name.

## Deploy to GitHub Pages (repo root)
1. Create a new GitHub repo.
2. Upload the contents of this folder (files and subfolders) to the repo root.
3. Settings → Pages → Source: main branch, folder: / (root).
4. Open the generated Pages URL.

## Embed in Google Sites
- Insert → Embed → URL → paste your hosted site URL.

## Notes
- Paths are lowercase and hyphenated; case sensitivity matters on hosts.
- All assets load via relative paths and work over HTTPS.

## Version and Changelog
- The footer shows the current version and links to the changelog.
- To update the version, edit VERSION in index.js and add a changelog entry.
- Changelog URL: https://github.com/chrisperegrino83/ve-portfolio/blob/main/CHANGELOG.md

## Releases and Tags
- GitHub Releases: draft a release with tag (e.g., v1.0.1) targeting main.
- Git CLI (optional):
  - `git tag -a v1.0.1 -m "Release notes"`
  - `git push origin v1.0.1`

## Troubleshooting
- 404 images: ensure project-pic/ and background-images/ exist at the site root.
- Mixed content: keep everything served via HTTPS.
- Case sensitivity: folder/file names must match exactly what index.html references.
