# Rootwater Collective — Official Website

> *The album where reggae remembered it was a theory of everything.*

A breathing, living digital space for Rootwater Collective — conscious roots reggae that bridges testimony and data, physics and mysticism.

---

## 🌊 Overview

This is the official website for Rootwater Collective, featuring:

- **Home** — Breathing hero animation, album showcases, philosophy statement
- **Music** — Full album pages with expandable track listings and production notes
- **Lyrics** — Searchable lyrics archive with beautiful typography
- **Story** — The narrative behind the collective and its philosophy
- **Connect** — Contact form, newsletter signup, social links

### Design Philosophy

**Sacred minimalism meets organic warmth.** The site feels like entering the music itself — grounded, alive, and quietly revolutionary. Every element breathes with subtle animations that mirror human breath (4 seconds in, 4 seconds out).

---

## 🎨 Design System

### Color Palette

```css
--black:       #0A0A08   /* Primary background */
--near-black:  #121210   /* Card backgrounds */
--cream:       #F5F0E6   /* Primary text */
--cream-dim:   rgba(245,240,230,0.6)  /* Secondary text */
--gold:        #D4A843   /* Accents, CTAs */
--gold-dim:    #B8922F   /* Borders, subtle accents */
--red:         #C4392D   /* Rastafari accent */
--green:       #2D7A3A   /* Rastafari accent */
--green-deep:  #1B5426   /* Hover states */
```

### Typography

- **Display/Headings**: Playfair Display (900 weight)
- **Accent/Pull quotes**: Instrument Serif (italic)
- **Body/UI**: DM Sans (300/400 weight)
- **Monospace**: JetBrains Mono (300 weight)

All fonts loaded via Google Fonts.

### Key Features

✨ **Breathing animations** — Subtle, meditative scale transforms
🌊 **Ripple effect** — Concentric circles on homepage hero
📜 **Scroll reveals** — Content fades up on scroll with Intersection Observer
🖱️ **Custom cursor** — Gold glowing cursor on desktop
📱 **Fully responsive** — Mobile-first design with 3 breakpoints
♿ **Accessible** — WCAG AA compliant, keyboard navigable, reduced motion support

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- (Optional) A local web server for development

### Installation

1. **Clone or download** this repository:
   ```bash
   git clone [repository-url]
   cd rootwater-collective
   ```

2. **Open in browser**:

   **Option A** — Direct file access:
   ```bash
   open index.html
   ```

   **Option B** — Local server (recommended):
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (with npx)
   npx http-server -p 8000

   # PHP
   php -S localhost:8000
   ```

   Then visit: `http://localhost:8000`

---

## 📁 Project Structure

```
rootwater-collective/
├── index.html              # Homepage
├── css/
│   └── main.css           # Main stylesheet (all variables, base styles, animations)
├── js/
│   └── main.js            # Core JavaScript (scroll reveals, nav, cursor, forms)
├── pages/
│   ├── music.html         # Albums & track listings
│   ├── lyrics.html        # Searchable lyrics archive
│   ├── story.html         # About / Philosophy
│   └── connect.html       # Contact & social links
├── images/                # (Album artwork, photos — add as needed)
└── README.md             # This file
```

---

## 🎯 Key Interactions

### Breathing Effect

```css
@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}
.breathing { animation: breathe 8s ease-in-out infinite; }
```

Applied to the hero ripple and select decorative elements. Honors `prefers-reduced-motion`.

### Scroll Reveals

Uses `IntersectionObserver` API to trigger `.reveal` elements:

```javascript
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });
```

Elements fade up (`translateY: 20px → 0, opacity: 0 → 1`) when they enter viewport.

### Mobile Navigation

Full-screen overlay with staggered fade-in animations. Accessible via hamburger menu, closes on link click or ESC key.

### Track Accordions

Click track headers to expand lyrics and production notes. Only one track open at a time.

---

## 🎨 Customization

### Changing Colors

Edit CSS variables in `css/main.css`:

```css
:root {
  --gold: #D4A843;  /* Change accent color */
  --black: #0A0A08; /* Change background */
}
```

### Adding Album Artwork

1. Add images to `images/` directory
2. Update album cover placeholders in `music.html`:

```html
<div class="album-cover-large" style="background-image: url('../images/rivers-roots-cover.jpg');">
</div>
```

### Adding More Lyrics

Edit `pages/lyrics.html` and follow the existing structure:

```html
<article id="song-slug" class="reveal">
  <div class="lyric-header">
    <h1>Song Title</h1>
    <!-- metadata -->
  </div>
  <div class="lyric-section">
    <div class="lyric-section-label">VERSE I</div>
    <div class="lyric-lines">
      <p>Lyrics here...<br>Line by line...</p>
    </div>
  </div>
</article>
```

---

## 📝 Forms Integration

Currently, forms are **frontend-only**. To connect to a backend:

### Newsletter Form

Edit `js/main.js` → `initNewsletterForm()`:

```javascript
const response = await fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

**Suggested services:**
- Mailchimp API
- ConvertKit
- Buttondown
- Custom serverless function (Netlify/Vercel)

### Contact Form

Edit `js/main.js` → `initContactForm()`:

```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

**Suggested services:**
- Formspree
- Netlify Forms
- EmailJS
- Custom serverless function

---

## 🚢 Deployment

### Option 1: Netlify (Recommended)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → select your repo
4. Deploy settings:
   - Build command: *(leave empty)*
   - Publish directory: `/`
5. Deploy!

**Custom domain**: Settings → Domain Management → Add custom domain

### Option 2: Vercel

```bash
npm i -g vercel
cd rootwater-collective
vercel
```

### Option 3: GitHub Pages

1. Push to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)` folder
3. Save and wait for deployment

**Note**: Update all links to use relative paths (`./pages/music.html` instead of `/pages/music.html`) for GitHub Pages.

### Option 4: Traditional Hosting

Upload all files via FTP to your web host. Ensure `index.html` is in the root directory.

---

## ♿ Accessibility Features

- ✅ Semantic HTML5 throughout
- ✅ ARIA labels on interactive elements
- ✅ Color contrast ratios exceed WCAG AA standards
- ✅ Keyboard navigable (Tab, Enter, Escape)
- ✅ Skip-to-content link
- ✅ `prefers-reduced-motion` media query support
- ✅ Focus indicators on all interactive elements
- ✅ Alt text ready (add images with descriptive alt attributes)

---

## 🎵 Performance

**Current optimizations:**

- CSS-only animations (no heavy JS libraries)
- Lazy-loading ready (add `loading="lazy"` to images)
- Inline SVG for grain texture (no extra HTTP request)
- Google Fonts with `display=swap` for non-blocking load
- Minimal JavaScript (~8KB minified)

**Target Lighthouse scores:** 90+ across all categories

**Further optimization:**

- Minify CSS/JS for production
- Compress images (use WebP format)
- Add service worker for offline support
- Implement critical CSS inlining

---

## 🛠️ Browser Support

**Tested and supported:**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Progressive enhancement:**

- Custom cursor disabled on mobile
- Background attachment fixed → scroll on mobile
- All core functionality works without JavaScript (forms require JS for enhanced UX)

---

## 📜 License

© 2026 Rootwater Collective. All rights reserved.

Website code can be used as reference for educational purposes. Please respect the artistic and intellectual property of the music and content.

---

## 🙏 Credits

**Design & Development**: Built with intention, patience, and the same care as the music.

**Typography**: Google Fonts (Playfair Display, Instrument Serif, DM Sans, JetBrains Mono)

**Philosophy**: *"Every part contains the whole. What the physicist measured, the mystic already told."*

---

## 📞 Support

For questions, feedback, or collaboration:

- 📧 Email: contact@rootwatercollective.com *(update with real email)*
- 🐛 Issues: Open an issue in this repository
- 💬 Feedback: Use the contact form on the site

---

## 🌊 The Feeling

*When someone visits this website, they should feel like they've stepped out of the noise of the internet and into a space that was designed with the same care as the music. Every pixel should feel intentional. Every animation should feel like breathing. Every word should feel like it was placed there by hand.*

*The site should make the visitor slow down. Scroll slower. Read more carefully. Feel something shift in their chest — the same shift the music creates.*

**It's not a website. It's a room. And the door just closed behind you.**

---

**If you listen carefully now — you will hear it.** 🌊
