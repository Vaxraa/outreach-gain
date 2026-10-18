# OutreachGain - Completely Free

AI-powered cold email generator. **100% free - no credit card needed.**

## Free Options

### Option 1: Hugging Face (Recommended - Free & Easy)
1. Sign up: https://huggingface.co (free)
2. Get API token: https://huggingface.co/settings/tokens
3. Add to `.env.local`:
   ```
   HF_API_TOKEN=hf_...
   ```

### Option 2: Ollama (Local - Completely Free, No Internet)
1. Download: https://ollama.ai
2. Run: `ollama pull mistral`
3. It runs on `http://localhost:11434`
4. No API key needed

### Option 3: Groq (Free with Rate Limits)
1. Sign up: https://console.groq.com
2. Get free API key
3. Add to `.env.local`:
   ```
   GROQ_API_KEY=gsk_...
   ```

## Quick Start

```bash
# Install
npm install

# Add your free API token to .env.local
echo "HF_API_TOKEN=hf_..." > .env.local

# Run
npm run dev
```

## Zero Cost Breakdown

- **Frontend hosting:** Vercel (free tier)
- **Backend:** Vercel Functions (free tier)
- **AI:** Hugging Face free tier (unlimited for small usage)
- **Database:** None (CSV only)
- **Payments:** Stripe (no fees for free tier testing)

**Total cost: ₹0 forever**
