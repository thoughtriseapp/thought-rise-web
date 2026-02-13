# Thought Rise Updates

---

## 2026-02-12 19:25

### Changes
- Set up GitHub Pages deployment with custom domain (thoughtriseapp.com)
- Created GitHub Actions workflow for auto-deploy on push to main
- Added CNAME file for custom domain
- Changed dev server port from 8080 to 4444
- Created `/thought-rise` and `/thought-rise-updates` slash commands

### Files Modified
- `public/CNAME` (new)
- `.github/workflows/deploy.yml` (new)
- `vite.config.ts` (port change)
- `package-lock.json` (synced)

### Notes
- DNS configured at Bluehost: 4 A records for @ → GitHub IPs, CNAME www → thoughtriseapp.github.io
- DNS propagation in progress - site will be live at thoughtriseapp.com once complete
- Old site was on Wix, now deploying from GitHub Pages
- Primary purpose: privacy policy page for App Store

---
