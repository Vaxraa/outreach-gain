export default function FAQ() {
  const faqs = [
    {
      q: 'Do I need a credit card to start?',
      a: 'No. The free plan (50 emails/month) requires no credit card. Upgrade anytime if you need more.'
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
    }
  ]

  return (
    <section className="py-20 px-4 bg-white border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know about OutreachGain.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg text-center">
          <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">We're here to help. Reach out at support@outreachgain.com</p>
        </div>
      </div>
    </section>
  )
}
