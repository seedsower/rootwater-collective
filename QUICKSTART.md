# Quick Start Guide — Rootwater Collective Website

Get the site running locally in under 2 minutes.

---

## 🚀 Instant Preview

**Option 1 — Python (Most Common)**

```bash
cd rootwater-collective
python3 -m http.server 8000
```

**Option 2 — NPM Script**

```bash
cd rootwater-collective
npm start
```

**Option 3 — Node.js**

```bash
cd rootwater-collective
npx http-server -p 8000
```

**Then visit:** [http://localhost:8000](http://localhost:8000)

---

## 🎨 Customization Quick Wins

### Change the Accent Color

Edit `css/main.css` line 13:

```css
--gold: #D4A843;  /* Change this hex value */
```

### Add Your Album Artwork

1. Drop image in `images/` folder
2. Edit `index.html` or `pages/music.html`
3. Replace placeholder `<div>` with:

```html
<img src="images/your-album-cover.jpg" alt="Album Title">
```

### Update Social Links

Search for `href="#"` in all files and replace with real URLs:

```html
<!-- Before -->
<a href="#">SPOTIFY</a>

<!-- After -->
<a href="https://open.spotify.com/artist/yourID">SPOTIFY</a>
```

### Connect Forms to Backend

See **Forms Integration** section in [README.md](README.md#forms-integration)

---

## 🚢 Deploy in 5 Minutes

**Easiest method — Netlify:**

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → select repo
4. Click "Deploy"

**Done!** You'll get a live URL like: `rootwater-collective.netlify.app`

Full deployment guide: [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📁 File Structure (What's What)

```
├── index.html              ← Homepage (start here)
├── pages/
│   ├── music.html         ← Album pages
│   ├── lyrics.html        ← Lyrics archive
│   ├── story.html         ← About/Philosophy
│   └── connect.html       ← Contact form
├── css/
│   └── main.css           ← ALL styles (colors, animations, responsive)
├── js/
│   └── main.js            ← ALL functionality (nav, forms, animations)
├── images/                ← Put your images here
├── README.md              ← Full documentation
├── DEPLOYMENT.md          ← Deployment guides
└── PROJECT_SUMMARY.md     ← What was built
```

---

## ✅ Pre-Launch Checklist

- [ ] Test on mobile device (actual phone, not just DevTools)
- [ ] Replace placeholder album covers with real images
- [ ] Update social media links from `#` to real URLs
- [ ] Configure form backend (or use Netlify Forms)
- [ ] Add Google Analytics (optional)
- [ ] Test all navigation links
- [ ] Verify newsletter signup works
- [ ] Check accessibility with screen reader
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Set up custom domain

---

## 🆘 Common Issues

**Q: Fonts not loading?**
A: Check internet connection. Fonts load from Google CDN.

**Q: Custom cursor not showing?**
A: It's disabled on mobile. Desktop only. Check browser console for errors.

**Q: Forms don't submit?**
A: They're frontend-only. See [README.md](README.md) for backend integration.

**Q: Animation not working?**
A: User may have "reduce motion" enabled. Check System Preferences.

---

## 📞 Need Help?

- Read the full [README.md](README.md)
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for hosting questions
- Review [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for what's included

---

**The site is ready. The frequency is live.** 🌊

**If you listen carefully now — you will hear it.**
