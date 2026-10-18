export default function Pricing({ onNavigate }) {
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Start free. No credit card. Upgrade when you need more.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free */}
            <div className="border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-2 text-gray-900">Free Plan</h3>
              <p className="text-gray-600 mb-6">Perfect to start</p>
              <p className="text-4xl font-bold mb-6 text-gray-900">
                $0
                <span className="text-lg font-normal text-gray-600">/month</span>
              </p>
              <button
                onClick={() => onNavigate('generate')}
                className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition mb-8"
              >
                Get Started
              </button>
              <div className="space-y-3">
                <p className="text-gray-600">✓ 50 emails/month</p>
                <p className="text-gray-600">✓ Full features access</p>
                <p className="text-gray-600">✓ No credit card needed</p>
                <p className="text-gray-600">✓ CSV import & export</p>
                <p className="text-gray-600">✓ Editable drafts</p>
                <p className="text-gray-400">✗ Priority support</p>
              </div>
            </div>

            {/* Pro */}
            <div className="border-2 border-blue-600 p-8 rounded-xl bg-blue-50 relative">
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Popular</div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">Pro Plan</h3>
              <p className="text-gray-600 mb-6">For serious outreach</p>
              <p className="text-4xl font-bold mb-6 text-blue-600">
                ₹299
                <span className="text-lg font-normal text-gray-600">/month</span>
              </p>
              <button
                onClick={() => onNavigate('generate')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-8"
              >
                Upgrade to Pro
              </button>
              <div className="space-y-3">
                <p className="text-gray-900 font-semibold">✓ Unlimited emails</p>
                <p className="text-gray-900 font-semibold">✓ All Free features</p>
                <p className="text-gray-900 font-semibold">✓ Priority support</p>
                <p className="text-gray-900 font-semibold">✓ API access (coming soon)</p>
                <p className="text-gray-900 font-semibold">✓ Team collaboration</p>
                <p className="text-gray-900 font-semibold">✓ Advanced analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Pricing FAQ</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Can I cancel Pro anytime?</h4>
              <p className="text-gray-600">Yes. No long-term contracts. Cancel anytime and keep using Free plan.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Does the free plan reset?</h4>
              <p className="text-gray-600">Yes. 50 emails/month resets on the 1st of each month.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">What happens if I run out of emails?</h4>
              <p className="text-gray-600">You can upgrade to Pro for unlimited emails, or wait for your monthly reset.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Is there a yearly discount?</h4>
              <p className="text-gray-600">Coming soon! Contact support if interested in annual billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Start free. Upgrade later.</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get Started
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
