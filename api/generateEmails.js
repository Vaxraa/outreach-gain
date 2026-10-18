import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

export async function generateEmails(leads) {
  const prompt = `You are a cold email expert. Generate personalized cold emails for each lead.

For each person, write a compelling, personalized cold email that:
- Opens with something specific about them or their company
- Mentions a relevant pain point or opportunity
- Includes a clear call-to-action
- Is 3-4 sentences max
- Feels human, not robotic
- Never uses generic greetings like "I hope this finds you well"

Leads:
${leads.map((l) => `- ${l.name}, ${l.role} at ${l.company}${l.linkedin ? ` (${l.linkedin})` : ""}`).join("\n")}

Return ONLY valid JSON array with no markdown or extra text:
[
  {
    "name": "...",
    "company": "...",
    "role": "...",
    "email": "..."
  }
]`;

  const message = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type");
  }

  // Extract JSON from response
  const jsonMatch = content.text.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error("Could not parse email response");
  }

  return JSON.parse(jsonMatch[0]);
}
