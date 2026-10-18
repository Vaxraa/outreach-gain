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
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-gray-900 border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500 cursor-pointer hover:opacity-80 transition" onClick={() => onNavigate('home')}>OG</h1>
          <nav className="flex gap-8">
            <button onClick={() => onNavigate('features')} className="text-gray-300 hover:text-red-500 font-semibold transition">Features</button>
            <button onClick={() => onNavigate('howItWorks')} className="text-gray-300 hover:text-red-500 font-semibold transition">How It Works</button>
            <button onClick={() => onNavigate('roi')} className="text-gray-300 hover:text-red-500 font-semibold transition">ROI</button>
            <button onClick={() => onNavigate('testimonials')} className="text-gray-300 hover:text-red-500 font-semibold transition">Stories</button>
            <button onClick={() => onNavigate('pricing')} className="text-gray-300 hover:text-red-500 font-semibold transition">Pricing</button>
            <button onClick={() => onNavigate('faq')} className="text-gray-300 hover:text-red-500 font-semibold transition">FAQ</button>
          </nav>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Help & Support</p>
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400">Everything you need to know about OutreachGain</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-700 rounded-lg p-6 hover:border-red-600 transition bg-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Still have questions?</h3>
          <p className="text-lg text-gray-400 mb-8">We're here to help. Reach out to our support team.</p>
          <a href="mailto:support@outreachgain.com" className="text-red-500 font-semibold hover:text-red-400 transition">
            Email: support@outreachgain.com
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to get started?</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Generating Emails
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>&copy; 2026 OutreachGain. Modern design. Convenient workflow.</p>
        </div>
      </footer>
    </div>
  )
}
