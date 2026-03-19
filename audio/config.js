// Audio CDN Configuration
// Update this file with your CDN base URL, then use it across the site

const AUDIO_CDN = {
  // Replace with your actual CDN base URL
  baseUrl: 'https://cdn.example.com/rootwater-collective',

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
