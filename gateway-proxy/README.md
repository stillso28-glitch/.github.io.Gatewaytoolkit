# Gateway API Proxy

Vercel serverless functions that proxy Claude and Buffer API calls.
API keys live here — no agent ever needs to enter a key.

## Deploy (5 minutes)

```bash
cd gateway-proxy
npx vercel deploy --prod
```

Vercel will give you a URL like `https://gateway-api-proxy.vercel.app`.

## Set Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables, add:

| Variable | Value |
|---|---|
| `CLAUDE_API_KEY` | Your Anthropic key (`sk-ant-...`) |
| `BUFFER_ACCESS_TOKEN` | Your brokerage Buffer token |
| `GATEWAY_SECRET` | A random secret (run `openssl rand -hex 32`) |
| `ALLOWED_ORIGIN` | `https://yourdomain.github.io` (production only) |

## Wire to the Toolkit

In your toolkit's `config.js`:

```js
const CONFIG = {
  proxyUrl:    'https://gateway-api-proxy.vercel.app',
  proxySecret: 'same-value-as-GATEWAY_SECRET',
  // claudeApiKey and bufferAccessToken are no longer needed locally
};
```

## Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | Check proxy is up + which services are configured |
| `POST` | `/api/claude` | Proxy to Anthropic API |
| `GET` | `/api/buffer-profiles` | Fetch connected Buffer profiles |
| `POST` | `/api/buffer` | Create a Buffer update |

## Multi-Agent Buffer (4–8 agents)

All agents share the single brokerage Buffer account token stored in `BUFFER_ACCESS_TOKEN`.
The `/api/buffer-profiles` endpoint returns the same profiles to everyone.
Each agent selects which profiles to post to — the proxy routes the post.

To give agents separate Buffer profiles in the future, store per-agent tokens in Supabase
and look up the token by user session in the proxy handler.
