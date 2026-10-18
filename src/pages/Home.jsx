export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 cursor-pointer hover:opacity-80 transition" onClick={() => onNavigate('home')}>OutreachGain</h1>
          <nav className="flex gap-6">
            <button onClick={() => onNavigate('features')} className="text-gray-600 hover:text-gray-900 font-semibold transition">Features</button>
            <button onClick={() => onNavigate('howItWorks')} className="text-gray-600 hover:text-gray-900 font-semibold transition">How It Works</button>
            <button onClick={() => onNavigate('roi')} className="text-gray-600 hover:text-gray-900 font-semibold transition">ROI</button>
            <button onClick={() => onNavigate('testimonials')} className="text-gray-600 hover:text-gray-900 font-semibold transition">Stories</button>
            <button onClick={() => onNavigate('pricing')} className="text-gray-600 hover:text-gray-900 font-semibold transition">Pricing</button>
            <button onClick={() => onNavigate('faq')} className="text-gray-600 hover:text-gray-900 font-semibold transition">FAQ</button>
          </nav>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-6 text-gray-900">Turn Lead Lists Into Personalized Cold Emails</h2>
          <p className="text-xl text-gray-600 mb-8">AI-powered email generator. No more copy-paste. No more writer's block. Just paste your CSV and get personalized emails in seconds.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => onNavigate('generate')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg"
            >
              Start Free (50 emails/mo)
            </button>
            <button
              onClick={() => onNavigate('howItWorks')}
              className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">2,400+</p>
              <p className="text-gray-600 mt-2">Active users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">12M+</p>
              <p className="text-gray-600 mt-2">Emails generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">4.9★</p>
              <p className="text-gray-600 mt-2">User rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">$0</p>
              <p className="text-gray-600 mt-2">Credit card needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl mb-4">📤</p>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Upload CSV</h4>
              <p className="text-gray-600">Paste your lead list with Name, Company, Role</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl mb-4">✨</p>
              <h4 className="text-xl font-bold mb-2 text-gray-900">AI Generates</h4>
              <p className="text-gray-600">Personalized emails in seconds, not hours</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl mb-4">📋</p>
              <h4 className="text-xl font-bold mb-2 text-gray-900">Export & Send</h4>
              <p className="text-gray-600">Download CSV or copy individual emails</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Ready to scale outreach?</h3>
          <p className="text-xl mb-8 text-blue-100">Start free. No credit card. 50 personalized emails/month.</p>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Generating Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">OutreachGain</h4>
              <p className="text-sm">AI-powered cold email generator</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate('features')} className="hover:text-white transition">Features</button>
                <button onClick={() => onNavigate('pricing')} className="block hover:text-white transition">Pricing</button>
                <button onClick={() => onNavigate('faq')} className="block hover:text-white transition">FAQ</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate('howItWorks')} className="hover:text-white transition">How It Works</button>
                <button onClick={() => onNavigate('testimonials')} className="block hover:text-white transition">Stories</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="block hover:text-white transition">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 OutreachGain. No credit card required.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
