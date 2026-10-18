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

    // Completely free fallback - no API call needed
    const emails = leads.map((lead) => ({
      name: lead.name,
      company: lead.company,
      role: lead.role,
      email: `Hi ${lead.name},

I came across your profile and thought of reaching out. At ${lead.company}, I imagine you're working on [relevant challenge]. We help teams like yours [solve/improve].

Would love a quick 15-min chat to explore if there's a fit.

Best regards`,
    }));

    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
