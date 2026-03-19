// Audio CDN Configuration
// Update this file with your CDN base URL, then use it across the site

const AUDIO_CDN = {
  // Cloudflare R2 public CDN URL
  baseUrl: 'https://pub-11d4fa5899204f558f213e9d1764cf44.r2.dev',

  // Album preview files
  albums: {
    riversAndRoots: '/rivers-and-roots-preview.mp3',
    innerMeridian: '/inner-meridian-preview.mp3'
  },

  // Helper function to get full URL
  getUrl: function(album) {
    return this.baseUrl + this.albums[album];
  }
};

// Example CDN URLs (uncomment and use the one you choose):

// Cloudflare R2
// baseUrl: 'https://pub-xxxxx.r2.dev/audio'

// AWS CloudFront
// baseUrl: 'https://d1234567890.cloudfront.net/audio'

// Netlify
// baseUrl: 'https://rootwater-collective.netlify.app/audio'

// BunnyCDN
// baseUrl: 'https://rootwater.b-cdn.net'

// Cloudinary
// baseUrl: 'https://res.cloudinary.com/your-cloud/video/upload'

// Export for use (if using modules)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AUDIO_CDN;
}
