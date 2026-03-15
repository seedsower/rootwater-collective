# Deployment Guide — Rootwater Collective Website

Quick reference for deploying the Rootwater Collective website to various platforms.

---

## 🚀 Netlify (Recommended for Simplicity)

**Why Netlify:**
- Free SSL certificates
- Automatic deployments from Git
- Built-in form handling (can replace frontend-only forms)
- CDN distribution
- Custom domains

**Steps:**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Rootwater Collective website"
   git remote add origin https://github.com/your-username/rootwater-collective.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - **Build command:** *(leave empty)*
     - **Publish directory:** `/` or `.`
   - Click "Deploy site"

3. **Enable Netlify Forms** (optional):

   Add `netlify` attribute to forms in `connect.html` and `index.html`:

   ```html
   <form name="contact" method="POST" data-netlify="true" class="contact-form">
     <input type="hidden" name="form-name" value="contact">
     <!-- rest of form -->
   </form>
   ```

4. **Custom Domain:**
   - In Netlify dashboard: Site settings → Domain management
   - Add custom domain and follow DNS instructions

**Live URL example:** `https://rootwater-collective.netlify.app`

---

## ⚡ Vercel (Recommended for Performance)

**Why Vercel:**
- Instant global CDN
- Automatic HTTPS
- Zero config deployment
- Edge network optimization
- Preview deployments for branches

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd rootwater-collective
   vercel
   ```

   Follow prompts:
   - Setup new project? → Yes
   - Project name → `rootwater-collective`
   - Override settings? → No

3. **Production deployment:**
   ```bash
   vercel --prod
   ```

4. **Auto-deploy from Git:**
   - Link repo: `vercel git connect`
   - Every push to main → automatic deployment

**Live URL example:** `https://rootwater-collective.vercel.app`

---

## 📘 GitHub Pages (Free Hosting)

**Why GitHub Pages:**
- Free hosting
- Integrated with GitHub repos
- Simple for static sites

**Steps:**

1. **Prepare for GitHub Pages:**

   Update all internal links to use relative paths instead of absolute:

   ```html
   <!-- Change this: -->
   <a href="/pages/music.html">Music</a>

   <!-- To this: -->
   <a href="./pages/music.html">Music</a>
   ```

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/rootwater-collective.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch `main`, folder `/ (root)`
   - Save

4. **Wait 2-5 minutes**, then visit:
   ```
   https://your-username.github.io/rootwater-collective/
   ```

5. **Custom domain** (optional):
   - Add CNAME file to root: `echo "rootwater.com" > CNAME`
   - Update DNS: Add CNAME record pointing to `your-username.github.io`

---

## 🌐 Traditional Web Hosting (cPanel, FTP)

**For standard shared hosting (Bluehost, HostGator, DreamHost, etc.):**

1. **Prepare files:**
   ```bash
   # Optional: minify CSS/JS first
   # Then zip the directory
   zip -r rootwater-collective.zip rootwater-collective/
   ```

2. **Upload via FTP:**
   - Use FileZilla, Cyberduck, or cPanel File Manager
   - Upload all files to `public_html/` or `www/` directory
   - Ensure `index.html` is in the root

3. **File structure on server:**
   ```
   public_html/
   ├── index.html
   ├── css/
   ├── js/
   ├── pages/
   └── images/
   ```

4. **Visit your domain:**
   ```
   https://yourdomain.com
   ```

---

## 🐳 Docker (Advanced)

**For containerized deployment:**

Create `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t rootwater-collective .
docker run -d -p 8080:80 rootwater-collective
```

Access at `http://localhost:8080`

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Mobile navigation functions
- [ ] Forms show proper validation
- [ ] Images load (if added)
- [ ] Custom cursor appears on desktop
- [ ] Scroll animations trigger
- [ ] Responsive design works on mobile
- [ ] SSL certificate is active (HTTPS)
- [ ] Lighthouse score: 90+ (run in Chrome DevTools)

**Test URLs:**
- Homepage: `/`
- Music: `/pages/music.html`
- Lyrics: `/pages/lyrics.html`
- Story: `/pages/story.html`
- Connect: `/pages/connect.html`

---

## 🔧 Performance Optimization (Production)

Before deployment, consider:

1. **Minify CSS:**
   ```bash
   # Using cssnano (install: npm i -g cssnano-cli)
   cssnano css/main.css css/main.min.css
   ```

2. **Minify JavaScript:**
   ```bash
   # Using terser (install: npm i -g terser)
   terser js/main.js -o js/main.min.js -c -m
   ```

3. **Compress images:**
   - Use TinyPNG, ImageOptim, or Squoosh
   - Convert to WebP format where possible

4. **Update HTML to use minified files:**
   ```html
   <link rel="stylesheet" href="css/main.min.css">
   <script src="js/main.min.js"></script>
   ```

---

## 🔐 SSL Certificate

**Free SSL options:**

- **Netlify/Vercel:** Automatic (Let's Encrypt)
- **GitHub Pages:** Automatic
- **Traditional hosting:** Use cPanel → SSL/TLS → Let's Encrypt

Verify SSL: `https://www.ssllabs.com/ssltest/`

---

## 📈 Analytics Setup (Optional)

### Google Analytics

Add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-friendly alternative)

```html
<script defer data-domain="rootwater.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🆘 Troubleshooting

**Problem:** Links broken on GitHub Pages
**Solution:** Use relative paths (`./pages/music.html` not `/pages/music.html`)

**Problem:** Forms don't work
**Solution:** Implement backend (see README.md → Forms Integration)

**Problem:** Custom cursor doesn't appear
**Solution:** Check browser console. Cursor is disabled on mobile by design.

**Problem:** Fonts not loading
**Solution:** Check Google Fonts API key. Verify internet connection.

**Problem:** Animations not working
**Solution:** User may have `prefers-reduced-motion` enabled. Check in DevTools.

---

## 🎯 Recommended Deployment Path

For most users:

**Phase 1:** Deploy to Netlify for testing (5 minutes)
**Phase 2:** Connect custom domain (15 minutes)
**Phase 3:** Set up Netlify Forms for contact/newsletter (10 minutes)
**Phase 4:** Add Google Analytics (5 minutes)

**Total time:** ~35 minutes to full production deployment

---

**The frequency is live. The current is flowing.** 🌊
