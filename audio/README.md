# Audio Files

This directory contains audio previews for the albums displayed on the music page.

## Required Files

To enable the audio players, add the following MP3 files to this directory:

1. **rivers-and-roots-preview.mp3** - Preview/sample track from Rivers & Roots album
2. **inner-meridian-preview.mp3** - Preview/sample track from The Inner Meridian album

## Recommendations

- **File size**: Keep previews under 10MB for faster loading
- **Duration**: 30-90 second previews work best
- **Quality**: 192kbps MP3 or higher recommended
- **Format**: MP3 (MPEG Audio Layer 3)

## Usage

The audio players on `/pages/music.html` will automatically load these files when present. If the files are missing, the players will display an error message.

## Alternative Sources

If you want to use external audio hosting (like SoundCloud, Bandcamp embeds, or streaming services), you can replace the `<audio>` elements in `pages/music.html` with iframe embeds from your preferred platform.
