import fetch from "node-fetch";

// Using Ollama (free, self-hosted) or Hugging Face Inference API (free tier)
// For MVP: use Hugging Face free inference API

export async function generateEmails(leads) {
  const prompt = `You are a cold email expert. Generate personalized cold emails for each lead.

For each person, write a compelling, personalized cold email that:
- Opens with something specific about them or their company
- Mentions a relevant pain point or opportunity
- Includes a clear call-to-action
- Is 3-4 sentences max
- Feels human, not robotic

Leads:
${leads.map((l) => `- ${l.name}, ${l.role} at ${l.company}`).join("\n")}

Return ONLY valid JSON array with no markdown:
[{"name":"...","company":"...","role":"...","email":"..."}]`;

  try {
    // Try Hugging Face free API first
    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
        },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 1000,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HF API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data[0]?.generated_text || "";

    // Extract JSON from response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      // Fallback: return template emails
      return leads.map((lead) => ({
        name: lead.name,
        company: lead.company,
        role: lead.role,
        email: `Hi ${lead.name},\n\nI noticed you're at ${lead.company}. Would love to chat about how we can help ${lead.company} with cold outreach.\n\nWhen's a good time for a quick call?\n\nThanks`,
      }));
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error("Error:", error);

    // Fallback: generate simple template emails (completely free, no API)
    return leads.map((lead) => ({
      name: lead.name,
      company: lead.company,
      role: lead.role,
      email: `Hi ${lead.name},\n\nI came across your profile and thought of reaching out. At ${lead.company}, you're likely dealing with [pain point]. We help teams like yours [solution].\n\nWould love a quick 15-min chat.\n\nBest`,
    }));
  }
}
