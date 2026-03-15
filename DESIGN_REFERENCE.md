# Design Reference — Rootwater Collective

Quick visual reference for the design system.

---

## 🎨 Color Palette

```
BACKGROUNDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#0A0A08  --black        █████  Primary background
#121210  --near-black   █████  Card backgrounds

TEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#F5F0E6  --cream        █████  Primary text
rgba(.6) --cream-dim    █████  Secondary text

ACCENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#D4A843  --gold         █████  CTAs, highlights
#B8922F  --gold-dim     █████  Borders, subtle

RASTAFARI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
#C4392D  --red          █████  Accent (sparingly)
#2D7A3A  --green        █████  Accent (sparingly)
#1B5426  --green-deep   █████  Hover states
```

**Usage Rules:**
- Gold is sacred — use for emphasis, not decoration
- Cream on black = 15.7:1 contrast (WCAG AAA)
- Rastafari colors in the bar divider and subtle accents only

---

## 📝 Typography Scale

```
DISPLAY (Playfair Display, 900 weight)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
H1   2.5rem → 5rem      "ROOTWATER COLLECTIVE"
H2   2rem → 3.5rem      "The Philosophy"
H3   1.5rem → 2.5rem    "Rivers Still Rising"

ACCENT (Instrument Serif, italic)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     1.2rem → 1.8rem    Pull quotes, taglines
     Used in lyrics for emphasized words

BODY (DM Sans, 300/400 weight)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     1rem (16px)        Primary text
     0.95rem            Navigation, labels
     Line height: 1.8

MONO (JetBrains Mono, 300 weight)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     0.875rem           Track numbers, metadata
     0.75rem            Small details
     Letter-spacing: 0.05em
```

**Typography Hierarchy:**
1. Display = Authority, tradition, gravity
2. Accent = Organic, human, poetic
3. Body = Clean, modern, legible
4. Mono = Technical, metadata, structure

---

## 🎭 Key Components

### Rastafari Bar
```
Height: 3px
Colors: Red (33.33%) | Gold (33.33%) | Green (33.33%)
Usage: Section dividers, footer top
```

### Breathing Animation
```
Duration: 8s ease-in-out infinite
Transform: scale(1) → scale(1.03) → scale(1)
Applied to: Hero ripple, decorative elements
Respects: prefers-reduced-motion
```

### Ripple Effect (Homepage Hero)
```
3 concentric circles
Stagger: 2s delay between each
Animation: Expand from 50px → 300px
Opacity: 0.3 → 0
Border: 1px solid gold-dim
```

### Custom Cursor (Desktop)
```
Default: 8px circle, gold with glow
Hover state: 24px circle, gold border, transparent fill
Smooth following: 0.15 speed easing
Mobile: Disabled
```

### Scroll Reveals
```
Initial: opacity: 0, translateY(20px)
Triggered: opacity: 1, translateY(0)
Duration: 600ms cubic-bezier(0.25, 0.1, 0.25, 1.0)
Stagger: +100ms per child element
Threshold: 15% in viewport
```

---

## 📐 Layout System

### Container Widths
```
--container-max: 1400px    Primary content container
--text-max: 680px          Long-form reading width
```

### Section Spacing
```
Desktop:  120px top/bottom
Tablet:   80px top/bottom
Mobile:   60px top/bottom
```

### Grid Patterns

**Album Cards (Homepage)**
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 4rem;
```

**Music Page (Album Layout)**
```css
grid-template-columns: 1fr 1.5fr;  /* Cover | Content */
gap: 4rem;
```

**Social Links**
```css
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 2rem;
```

---

## 🎨 Atmospheric Effects

### Film Grain Overlay
```
Type: SVG noise filter
Opacity: 0.04
Position: Fixed, full screen
Z-index: 9999 (top layer)
Pointer events: none
```

### Radial Gradients
```
Green glow:   20% 80%, opacity 0.08
Gold glow:    80% 20%, opacity 0.06
Red glow:     50% 100%, opacity 0.05
Position: Fixed, full screen
Z-index: 0 (bottom layer)
```

---

## 🎯 Interactive States

### Links
```
Default:     cream-dim
Hover:       gold, underline slides in from left (300ms)
Active:      gold
Focus:       2px gold outline, 2px offset
```

### Buttons
```
Default:     Gold background, black text
Hover:       Cream fills from left, text stays black
Transition:  300ms cubic-bezier
Ghost variant: Transparent, gold border
```

### Track Items (Accordions)
```
Default:     Border-bottom, cream text
Hover:       Padding-left shifts 1rem, color → gold
Active:      Max-height expands, shows lyrics/notes
Transition:  400ms smooth
```

---

## 📱 Responsive Breakpoints

```
Mobile:      < 768px
  - Single column layouts
  - Hamburger navigation
  - Smaller font sizes
  - Stack album grids

Tablet:      768px - 1024px
  - Two-column grids
  - Desktop nav visible
  - Moderate font sizes

Desktop:     > 1024px
  - Full layout
  - Sticky sidebars
  - Custom cursor enabled
  - Background fixed attachment
```

---

## ♿ Accessibility Features

### Focus Management
```css
outline: 2px solid var(--gold);
outline-offset: 2px;
```

### Skip Link
```
Position: Absolute top, moves on :focus
Background: Gold
Color: Black
Z-index: 10001
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
}
```

---

## 🎵 Animation Timing Reference

```
Breathing:          8000ms (meditative)
Scroll reveal:      600ms (considered)
Ripple expand:      6000ms (patient)
Scroll pulse:       2000ms (gentle)
Link underline:     300ms (responsive)
Button fill:        300ms (immediate)
Mobile nav fade:    400ms (graceful)
Track accordion:    400ms (smooth)
Page transition:    300ms + 300ms (breath between)
```

**Philosophy:** Every timing is intentional. Fast enough to feel responsive. Slow enough to feel intentional. Never jarring.

---

## 🌊 The One Thing

**The site breathes.**

Everything else — the colors, the typography, the spacing — supports that central metaphor. The user should feel the site expanding and contracting at the rhythm of human breath. 4 seconds in. 4 seconds out. Meditative. Alive. Unhurried.

---

**Design is not decoration. Design is testimony.** ✨
