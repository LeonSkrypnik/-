# Free-Tier AI Providers Compatible with Kilo Code (BYOK)

## Kilo Gateway Free Models (No API Key Required)

Kilo offers several completely free models through their gateway:

- **MiniMax M2.1** - General-purpose model
- **Z.AI: GLM 4.7** - Agent-centric applications
- **MoonshotAI: Kimi K2.5** - Advanced reasoning and code tasks
- **Arcee AI: Trinity Large Preview** - Strong capabilities

Rate limit: 200 requests/hour per IP

---

## OpenRouter Free Tier

Create a free account at openrouter.ai to access:

- **Qwen3 Coder** - Optimized for coding tasks
- **Z.AI: GLM 4.5 Air** - Lightweight agent-centric model
- **DeepSeek: R1 0528** - Reasoning model (parity with OpenAI o1)
- **MoonshotAI: Kimi K2** - Agentic capabilities

Setup: Create OpenRouter account → Get API key → Configure in Kilo Code

---

## BYOK (Bring Your Own Key) Providers

Use your own API key with Kilo Gateway—no markup, pay provider directly.

**Supported BYOK Providers:**
| Provider | Key ID |
|----------|--------|
| Anthropic | `anthropic` |
| OpenAI | `openai` |
| Google AI Studio | `google` |
| Mistral | `mistral` |
| MiniMax | `minimax` |
| xAI | `xai` |
| Z.AI | `zai` |
| AWS Bedrock | `bedrock` |

**Setup:**
1. Log into app.kilo.ai
2. Go to Account → Bring Your Own Key (BYOK)
3. Click "Add Your First Key", select provider, paste API key
4. Save

---

## Recommended Free/Budget Provider Mix

**Free Foundation:**
- Kilo Gateway Free Models
- OpenRouter Free Tier
- Groq (fast inference)

**Budget Options (<$0.50/million tokens):**
- DeepSeek
- Mistral Devstral Small
- MiniMax

**Premium Backup:**
- Anthropic Claude
- OpenAI GPT-4

---

## Virtual Quota Fallback

Kilo supports a Virtual Quota Fallback provider that automatically switches between providers based on usage limits. Useful for combining free tier with pay-as-you-go.

Example: Use Chutes AI Free (5000 tokens/hour) → Auto-fallback to personal OpenAI key