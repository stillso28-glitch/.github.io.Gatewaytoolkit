// ================================================================
// Gateway AI Config — committed to repo, safe to do so because:
//   • proxyUrl routes through YOUR Supabase Edge Function only
//   • The actual Claude API key lives in Supabase secrets, never here
//   • If this secret is ever compromised, rotate it in Supabase — done
//
// SETUP (one-time, no Vercel needed):
//   1. Deploy the Edge Function from your project root:
//        supabase functions deploy gateway-api
//
//   2. Set secrets in Supabase (never committed to code):
//        supabase secrets set CLAUDE_API_KEY=sk-ant-...
//        supabase secrets set GATEWAY_SECRET=<any-strong-random-string>
//        supabase secrets set BUFFER_ACCESS_TOKEN=...   (optional)
//
//   3. Paste your chosen GATEWAY_SECRET below as proxySecret.
//      The proxyUrl is already set — it's your existing Supabase project.
//
//   4. Commit this file — all agents get AI automatically. Done.
//
// Without a proxy: leave proxyUrl empty and agents enter their own
// Claude API key via the ✦ AI button. Both modes work simultaneously.
//
// Edge Function lives at:
//   supabase/functions/gateway-api/index.ts
// ================================================================
window.AI_CONFIG = {
  proxyUrl:    'https://jrtaxhfglcymipncwmvu.supabase.co/functions/v1/gateway-api',
  proxySecret: 'gateway2026abc'
};
