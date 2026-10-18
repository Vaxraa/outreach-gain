export default function Pricing({ onNavigate }) {
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
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="text-5xl font-bold text-white mb-6">Simple, Transparent</h1>
          <p className="text-xl text-gray-400">Start free. No credit card. Upgrade when you need more.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="border-2 border-gray-700 p-8 rounded-lg hover:border-red-600 transition">
              <h3 className="text-3xl font-bold text-white mb-2">Free Plan</h3>
              <p className="text-gray-400 mb-6">Perfect to start</p>
              <p className="text-4xl font-bold text-white mb-6">
                $0
                <span className="text-lg font-normal text-gray-400">/month</span>
              </p>
              <button
                onClick={() => onNavigate('generate')}
                className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition mb-8 border border-gray-700"
              >
                Get Started
              </button>
              <div className="space-y-3">
                <p className="text-gray-300">✓ 50 emails/month</p>
                <p className="text-gray-300">✓ Full features access</p>
                <p className="text-gray-300">✓ No credit card needed</p>
                <p className="text-gray-300">✓ CSV import & export</p>
                <p className="text-gray-300">✓ Editable drafts</p>
                <p className="text-gray-500">✗ Priority support</p>
              </div>
            </div>

            {/* Pro */}
            <div className="border-2 border-red-600 p-8 rounded-lg bg-gray-800 relative">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Popular</div>
              <h3 className="text-3xl font-bold text-white mb-2">Pro Plan</h3>
              <p className="text-gray-400 mb-6">For serious outreach</p>
              <p className="text-4xl font-bold text-red-500 mb-6">
                ₹299
                <span className="text-lg font-normal text-gray-400">/month</span>
              </p>
              <button
                onClick={() => onNavigate('generate')}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition mb-8"
              >
                Upgrade to Pro
              </button>
              <div className="space-y-3">
                <p className="text-white font-semibold">✓ Unlimited emails</p>
                <p className="text-white font-semibold">✓ All Free features</p>
                <p className="text-white font-semibold">✓ Priority support</p>
                <p className="text-white font-semibold">✓ API access (coming soon)</p>
                <p className="text-white font-semibold">✓ Team collaboration</p>
                <p className="text-white font-semibold">✓ Advanced analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-6">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-red-600 transition">
              <h4 className="font-bold text-white mb-2">Can I cancel Pro anytime?</h4>
              <p className="text-gray-400">Yes. No long-term contracts. Cancel anytime and keep using Free plan.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-red-600 transition">
              <h4 className="font-bold text-white mb-2">Does the free plan reset?</h4>
              <p className="text-gray-400">Yes. 50 emails/month resets on the 1st of each month.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-red-600 transition">
              <h4 className="font-bold text-white mb-2">What happens if I run out of emails?</h4>
              <p className="text-gray-400">You can upgrade to Pro for unlimited emails, or wait for your monthly reset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Start free. Upgrade later.</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Started
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
