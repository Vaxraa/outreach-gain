export default function Features({ onNavigate }) {
  const features = [
    {
      icon: '📄',
      title: 'CSV Import',
      description: 'Upload lead lists with Name, Company, and Role. Supports any CSV format.'
    },
    {
      icon: '✨',
      title: 'AI Personalization',
      description: 'Each email is personalized based on the prospect\'s role, company, and industry.'
    },
    {
      icon: '✏️',
      title: 'Fully Editable',
      description: 'Edit and refine every email before copying or exporting. Full control.'
    },
    {
      icon: '📥',
      title: 'Multiple Export',
      description: 'Download as CSV, copy to clipboard, or integrate with your CRM.'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data is never stored. Processed in-memory and deleted immediately.'
    },
    {
      icon: '⚡',
      title: 'Super Fast',
      description: 'Generate 100 personalized emails in under 30 seconds.'
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Powerful Features</h1>
          <p className="text-xl text-gray-600">Everything you need to generate personalized cold emails at scale</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-5xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Why Teams Choose OutreachGain</h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">No Setup Required</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">Start in 30 seconds. No API keys, no integrations, no complex setup. Just paste your CSV and generate.</p>
                <p className="text-lg text-gray-600 leading-relaxed">Free plan includes 50 emails/month. No credit card needed. Upgrade anytime.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-600">0</p>
                  <p className="text-gray-600 mt-2">Setup steps</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-600">100%</p>
                  <p className="text-gray-600 mt-2">Editable</p>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Full Control</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">AI generates the first draft. You maintain complete control. Edit any email, change the tone, add context.</p>
                <p className="text-lg text-gray-600 leading-relaxed">Every email is a starting point, not the final word. Your voice stays authentic.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Your Data is Safe</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">We never store your lead data. Your CSV is processed in-memory and deleted immediately after generation.</p>
                <p className="text-lg text-gray-600 leading-relaxed">No tracking. No selling. No third-party access. Your data is yours alone.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-600">🔒</p>
                  <p className="text-gray-600 mt-2">Privacy First</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to try it?</h3>
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
