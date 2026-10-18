import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { leads } = req.body;

    if (!leads || !Array.isArray(leads) || leads.length === 0) {
      return res.status(400).json({ error: "No leads provided" });
    }

    if (leads.length > 100) {
      return res.status(400).json({ error: "Max 100 leads per request" });
    }

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

    const message = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    });

    const content = message.content[0];
    const jsonMatch = content.text.match(/\[[\s\S]*\]/);
    const emails = JSON.parse(jsonMatch[0]);

    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
