// Gateway Agent Toolkit - API Configuration Template
//
// INSTRUCTIONS:
// 1. Copy this file and rename it to "config.js"
// 2. Replace all placeholder values with your actual API keys
// 3. NEVER commit config.js to GitHub (it's in .gitignore)

const CONFIG = {

  // Buffer API - https://buffer.com/developers/apps
  // Get your access token from the Buffer developer dashboard
  bufferAccessToken: 'YOUR_BUFFER_ACCESS_TOKEN_HERE',

  // Claude API - https://console.anthropic.com → API Keys
  // Set this once and AI features (Executive Summary, Highlights, T12 parsing) activate automatically.
  // Key is stored locally in the browser — never uploaded anywhere.
  claudeApiKey: '',

  // About Gateway admin password — used to unlock editing of company info in the OM builder
  // Change this to something memorable. Default: gateway2025
  adminPassword: 'gateway2025',

  // Resend API - for email notifications (optional)
  resendApiKey: '',

  // Google Analytics (optional)
  googleAnalyticsId: '',

  // Gateway Office Address
  officeAddress: '700 Nebraska Street, Sioux City, IA'

};

if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
