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
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Our Features</p>
          <h1 className="text-5xl font-bold text-white mb-6">Powerful Capabilities</h1>
          <p className="text-xl text-gray-400">Everything you need to generate personalized cold emails at scale</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Why Teams Choose OutreachGain</h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">No Setup Required</h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">Start in 30 seconds. No API keys, no integrations, no complex setup. Just paste your CSV and generate.</p>
                <p className="text-lg text-gray-400 leading-relaxed">Free plan includes 50 emails/month. No credit card needed. Upgrade anytime.</p>
              </div>
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center">
                <div className="text-6xl font-bold text-red-500 mb-2">0</div>
                <p className="text-gray-400">Setup Steps</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center">
                <div className="text-6xl font-bold text-red-500 mb-2">100%</div>
                <p className="text-gray-400">Editable</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Full Control</h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">AI generates the first draft. You maintain complete control. Edit any email, change the tone, add context.</p>
                <p className="text-lg text-gray-400 leading-relaxed">Every email is a starting point, not the final word. Your voice stays authentic.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Your Data is Safe</h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-4">We never store your lead data. Your CSV is processed in-memory and deleted immediately after generation.</p>
                <p className="text-lg text-gray-400 leading-relaxed">No tracking. No selling. No third-party access. Your data is yours alone.</p>
              </div>
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center">
                <div className="text-6xl mb-2">🔒</div>
                <p className="text-gray-400">Privacy First</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to try it?</h3>
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
