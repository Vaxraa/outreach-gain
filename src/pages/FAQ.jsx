export default function FAQ({ onNavigate }) {
  const faqs = [
    {
      q: 'Do I need a credit card to start?',
      a: 'No. The free plan (50 emails/month) requires no credit card. Upgrade to Pro anytime if you need more.'
    },
    {
      q: 'What happens to my lead data?',
      a: 'Your leads are never stored on our servers. They\'re processed in-memory and deleted after email generation. We don\'t sell or share your data.'
    },
    {
      q: 'Can I edit the generated emails?',
      a: 'Yes. Each email is fully editable before you copy or export. We recommend reviewing and personalizing further for best results.'
    },
    {
      q: 'What format should my CSV be in?',
      a: 'Three required columns: Name, Company, Role. Optional: any other context (industry, challenge, product interest). One lead per row.'
    },
    {
      q: 'How many emails can I generate with the free plan?',
      a: '50 emails per calendar month. The limit resets on the 1st of each month. Upgrade to Pro for unlimited.'
    },
    {
      q: 'Can I export the generated emails?',
      a: 'Yes. Download all emails as CSV, or copy individual emails to your clipboard. Works with Gmail, HubSpot, Lemlist, and most email/CRM tools.'
    },
    {
      q: 'How long does generation take?',
      a: 'Typically 10-30 seconds depending on list size. AI processes each lead and creates a personalized draft.'
    },
    {
      q: 'Do you offer team accounts?',
      a: 'Team features are coming soon on Pro plan. Contact support if interested in early access.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-blue-600 hover:opacity-80 transition">OutreachGain</button>
          <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-gray-900 font-semibold">← Back</button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Everything you need to know about OutreachGain</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Still have questions?</h3>
          <p className="text-lg text-gray-600 mb-8">We're here to help. Reach out to our support team.</p>
          <a href="mailto:support@outreachgain.com" className="text-blue-600 font-semibold hover:text-blue-700">
            Email: support@outreachgain.com
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to get started?</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Generating Emails
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>&copy; 2026 OutreachGain. No credit card required.</p>
        </div>
      </footer>
    </div>
  )
}
