import express from "express";
import cors from "cors";
import { generateEmails } from "./generateEmails.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Generate emails endpoint
app.post("/api/generate-emails", async (req, res) => {
  try {
    const { leads } = req.body;

    if (!leads || !Array.isArray(leads) || leads.length === 0) {
      return res.status(400).json({ error: "No leads provided" });
    }

    if (leads.length > 100) {
      return res.status(400).json({ error: "Max 100 leads per request" });
    }

    // Validate lead structure
    for (const lead of leads) {
      if (!lead.name || !lead.company || !lead.role) {
        return res
          .status(400)
          .json({ error: "Each lead must have name, company, and role" });
      }
    }

    const emails = await generateEmails(leads);
    res.json({ emails });
  } catch (error) {
    console.error("Error generating emails:", error);
    res.status(500).json({
      error: error.message || "Failed to generate emails",
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📧 Email generation endpoint: POST ${PORT}/api/generate-emails`);
});
