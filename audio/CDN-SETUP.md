# CDN Setup for Audio Streaming

The audio players on the music page are configured to stream MP3 files from a CDN for optimal performance and global delivery.

## Quick Setup

1. Upload your MP3 files to your chosen CDN
2. Update the URLs in `pages/music.html`
3. Ensure CORS headers are configured on your CDN

## Recommended CDN Options

### Option 1: Cloudflare R2 (Recommended - Free tier available)

**Why:** Free egress bandwidth, S3-compatible, excellent for audio

```bash
# Install Wrangler CLI
npm install -g wrangler

# Create R2 bucket
wrangler r2 bucket create rootwater-audio

# Upload files
wrangler r2 object put rootwater-audio/rivers-and-roots-preview.mp3 --file ./rivers-and-roots-preview.mp3
wrangler r2 object put rootwater-audio/inner-meridian-preview.mp3 --file ./inner-meridian-preview.mp3

# Make bucket public and get URL
```

**URL format:** `https://pub-xxxxx.r2.dev/rivers-and-roots-preview.mp3`

---

### Option 2: Netlify (If you're already hosting on Netlify)

**Why:** Simple, integrated, no extra setup

1. Keep files in `audio/` directory
2. Update URLs in `pages/music.html` to:
   ```
   https://your-site.netlify.app/audio/rivers-and-roots-preview.mp3
   ```

---

### Option 3: AWS S3 + CloudFront

**Why:** Professional, scalable, fast global delivery

```bash
# Upload to S3
aws s3 cp rivers-and-roots-preview.mp3 s3://your-bucket/audio/
aws s3 cp inner-meridian-preview.mp3 s3://your-bucket/audio/

# Make files public
aws s3api put-object-acl --bucket your-bucket --key audio/rivers-and-roots-preview.mp3 --acl public-read
```

**URL format:** `https://d1234567890.cloudfront.net/audio/rivers-and-roots-preview.mp3`

---

### Option 4: BunnyCDN

**Why:** Affordable, fast, simple UI

1. Create storage zone at bunny.net
2. Upload MP3 files via FTP or web interface
3. Enable public access

**URL format:** `https://your-zone.b-cdn.net/rivers-and-roots-preview.mp3`

---

### Option 5: Cloudinary (Good for small files)

**Why:** Free tier, easy upload, built-in optimizations

```bash
# Upload via CLI
cloudinary upload rivers-and-roots-preview.mp3 --resource_type video

# Or use web interface at cloudinary.com
```

**URL format:** `https://res.cloudinary.com/your-cloud/video/upload/rivers-and-roots-preview.mp3`

---

## Important: CORS Configuration

Your CDN must allow cross-origin requests. Add these headers:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
```

### CORS Setup by Platform:

**Cloudflare R2:**
```json
{
  "AllowedOrigins": ["*"],
  "AllowedMethods": ["GET", "HEAD"],
  "AllowedHeaders": ["*"]
}
```

**AWS S3:**
```json
[{
  "AllowedHeaders": ["*"],
  "AllowedMethods": ["GET", "HEAD"],
  "AllowedOrigins": ["*"],
  "ExposeHeaders": []
}]
```

**Netlify:** Automatically configured ✓

---

## Update URLs in pages/music.html

Find and replace these lines in `pages/music.html`:

```html
<!-- Rivers & Roots -->
<source src="https://cdn.example.com/rootwater-collective/rivers-and-roots-preview.mp3" type="audio/mpeg">

<!-- Inner Meridian -->
<source src="https://cdn.example.com/rootwater-collective/inner-meridian-preview.mp3" type="audio/mpeg">
```

Replace `https://cdn.example.com/rootwater-collective/` with your actual CDN URL.

---

## File Recommendations

- **Format:** MP3 (MPEG Audio Layer 3)
- **Bitrate:** 192-320 kbps for quality, 128 kbps for smaller size
- **Duration:** 30-90 seconds (preview length)
- **File size:** Aim for 2-5MB per file
- **Sample rate:** 44.1 kHz standard

---

## Testing

After uploading, test your CDN URLs:

```bash
# Test if file is accessible
curl -I https://your-cdn-url/rivers-and-roots-preview.mp3

# Should return: HTTP/2 200
# And include: Content-Type: audio/mpeg
```

---

## Cost Comparison (approximate, as of 2026)

| Provider | Free Tier | Bandwidth Cost |
|----------|-----------|----------------|
| Cloudflare R2 | 10GB storage | $0.00/GB (free egress!) |
| Netlify | 100GB/month | Included in hosting |
| AWS CloudFront | 1TB/year | ~$0.085/GB after |
| BunnyCDN | None | ~$0.01/GB |
| Cloudinary | 25GB/month | Included |

**Recommendation:** Use Cloudflare R2 or keep files in Netlify if you're under 100GB/month.
