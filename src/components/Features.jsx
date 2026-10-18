export default function Features() {
  const features = [
    {
      icon: '📋',
      title: 'CSV Lead Import',
      desc: 'Upload leads with name, company, and role. We handle the rest.'
    },
    {
      icon: '✏️',
      title: 'Editable Drafts',
      desc: 'Review each email before sending. Edit tone, length, or content.'
    },
    {
      icon: '📋',
      title: 'Bulk Export',
      desc: 'Download all emails as CSV or copy-paste individual drafts.'
    },
    {
      icon: '🔐',
      title: 'Your Data, Your Control',
      desc: 'Leads are never stored or sold. Generated emails are yours.'
    },
    {
      icon: '⚙️',
      title: 'Simple Setup',
      desc: 'No API keys or complex configuration. Paste CSV and generate.'
    },
    {
      icon: '💼',
      title: 'Works With Any Tool',
      desc: 'Export to Gmail, HubSpot, Lemlist, or paste into your CRM.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to generate and manage personalized cold emails.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
