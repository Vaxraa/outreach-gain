export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-gray-900 border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500 cursor-pointer hover:opacity-80 transition">OG</h1>
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

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center">
        <div className="max-w-6xl mx-auto w-full px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Our Innovation</p>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Turn Leads Into Personalized Emails
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              AI-powered email generation. Modern design. Convenient workflow. The key to successful cold outreach.
            </p>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => onNavigate('generate')}
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2"
              >
                → Start Free
              </button>
              <button
                onClick={() => onNavigate('howItWorks')}
                className="text-gray-300 hover:text-red-500 font-semibold transition"
              >
                See More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 flex gap-12">
              <div>
                <p className="text-gray-500 text-sm mb-2">01</p>
                <div className="w-12 h-0.5 bg-red-500 mb-4"></div>
                <p className="text-gray-400 text-sm">Users</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-2">02</p>
                <div className="w-12 h-0.5 bg-red-500 mb-4"></div>
                <p className="text-gray-400 text-sm">Generated</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-red-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 text-center">
              <div className="w-72 h-72 rounded-full border-2 border-red-600 flex items-center justify-center bg-gradient-to-b from-red-600 to-red-900 opacity-80">
                <div className="text-8xl">✨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-red-500">2,400+</p>
              <p className="text-gray-400 mt-2">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-500">12M+</p>
              <p className="text-gray-400 mt-2">Emails Generated</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-500">4.9★</p>
              <p className="text-gray-400 mt-2">Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-red-500">$0</p>
              <p className="text-gray-400 mt-2">To Start</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-16 text-center">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition">
              <div className="text-5xl mb-4">📤</div>
              <h4 className="text-xl font-bold text-white mb-3">Upload CSV</h4>
              <p className="text-gray-400">Paste your leads. Name, Company, Role.</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-bold text-white mb-3">AI Generates</h4>
              <p className="text-gray-400">Personalized emails in seconds.</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg hover:border-red-600 transition">
              <div className="text-5xl mb-4">📋</div>
              <h4 className="text-xl font-bold text-white mb-3">Export & Send</h4>
              <p className="text-gray-400">Download CSV or copy emails.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to scale outreach?</h3>
          <p className="text-lg text-red-100 mb-8">Start free. No credit card. 50 personalized emails/month.</p>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Generating Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">OutreachGain</h4>
              <p className="text-sm">AI-powered cold email generator</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate('features')} className="hover:text-red-500 transition">Features</button>
                <button onClick={() => onNavigate('pricing')} className="block hover:text-red-500 transition">Pricing</button>
                <button onClick={() => onNavigate('faq')} className="block hover:text-red-500 transition">FAQ</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => onNavigate('howItWorks')} className="hover:text-red-500 transition">How It Works</button>
                <button onClick={() => onNavigate('testimonials')} className="block hover:text-red-500 transition">Stories</button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="hover:text-red-500 transition">Privacy</a>
                <a href="#" className="block hover:text-red-500 transition">Terms</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 OutreachGain. Modern design. Convenient workflow.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
