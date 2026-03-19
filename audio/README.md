# Audio Files

This directory is for audio file documentation and configuration. The actual MP3 files are hosted on a CDN for optimal streaming performance.

## 🎵 CDN Streaming (Recommended)

The audio players are configured to stream from a CDN. See **[CDN-SETUP.md](CDN-SETUP.md)** for detailed setup instructions.

**Quick Start:**
1. Choose a CDN provider (Cloudflare R2, Netlify, AWS, etc.)
2. Upload your MP3 preview files
3. Update the URLs in `pages/music.html`

## Required Files

Upload these files to your CDN:

1. **rivers-and-roots-preview.mp3** - Rivers & Roots album preview (30-90 sec)
2. **inner-meridian-preview.mp3** - Inner Meridian album preview (30-90 sec)

## File Specifications

- **Format:** MP3 (MPEG Audio Layer 3)
- **Bitrate:** 192-320 kbps recommended
- **Duration:** 30-90 seconds
- **Size:** 2-5MB per file
- **Sample Rate:** 44.1 kHz

## Configuration

Edit `config.js` in this directory to set your CDN base URL once, rather than updating multiple files.

## Local Testing (Optional)

If you want to test locally before uploading to CDN:
1. Place MP3 files in this directory
2. Temporarily update `pages/music.html` to use relative paths:
   ```
   src="../audio/rivers-and-roots-preview.mp3"
   ```
3. Before deploying, switch back to CDN URLs
