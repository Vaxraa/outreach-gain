export default function HowItWorks({ onNavigate }) {
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
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Our Process</p>
          <h1 className="text-5xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-xl text-gray-400">Three simple steps from CSV to personalized emails</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-4">📤</div>
                <h2 className="text-4xl font-bold text-white mb-4">Step 1: Upload Your Leads</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">Paste your CSV with three columns: Name, Company, Role. That's it.</p>
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg font-mono text-sm text-gray-300">
                  <p>name,company,role</p>
                  <p className="text-red-500">John Smith,Acme Corp,VP Sales</p>
                  <p className="text-red-500">Jane Doe,TechCo,CEO</p>
                </div>
              </div>
              <div className="bg-gray-800 border border-red-600 p-12 rounded-lg text-center">
                <p className="text-6xl mb-4">1️⃣</p>
                <p className="text-2xl font-bold text-white">Import CSV</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-800 border border-red-600 p-12 rounded-lg text-center">
                <p className="text-6xl mb-4">2️⃣</p>
                <p className="text-2xl font-bold text-white">AI Generates</p>
              </div>
              <div>
                <div className="text-6xl mb-4">✨</div>
                <h2 className="text-4xl font-bold text-white mb-4">Step 2: AI Generates Drafts</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">Our AI analyzes each prospect and creates personalized email drafts. Each one is unique and relevant.</p>
                <p className="text-lg text-gray-400">Takes 10-30 seconds depending on list size. No credit card charged.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-4">📋</div>
                <h2 className="text-4xl font-bold text-white mb-4">Step 3: Review & Export</h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">Edit any email. Change the tone, add details, personalize further. Then export as CSV or copy individual emails.</p>
                <p className="text-lg text-gray-400">Works with Gmail, Outlook, HubSpot, Lemlist, and any email tool.</p>
              </div>
              <div className="bg-gray-800 border border-red-600 p-12 rounded-lg text-center">
                <p className="text-6xl mb-4">3️⃣</p>
                <p className="text-2xl font-bold text-white">Export & Send</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Why This Workflow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">80%</p>
              <p className="text-gray-400">Faster than manual writing</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">100%</p>
              <p className="text-gray-400">Personalized. No templates.</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">$0</p>
              <p className="text-gray-400">Free plan available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Try it now</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Generating
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
