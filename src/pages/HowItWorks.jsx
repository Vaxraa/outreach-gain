export default function HowItWorks({ onNavigate }) {
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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">How It Works</h1>
          <p className="text-xl text-gray-600">Three simple steps from CSV to personalized emails</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-4">📤</div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Step 1: Upload Your Leads</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">Paste your CSV with three columns: Name, Company, Role. That's it.</p>
                <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
                  <p>name,company,role</p>
                  <p>John Smith,Acme Corp,VP Sales</p>
                  <p>Jane Doe,TechCo,CEO</p>
                </div>
              </div>
              <div className="bg-blue-50 p-12 rounded-xl border-2 border-blue-200 text-center">
                <p className="text-6xl mb-4">1️⃣</p>
                <p className="text-2xl font-bold text-gray-900">Import CSV</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-blue-50 p-12 rounded-xl border-2 border-blue-200 text-center">
                <p className="text-6xl mb-4">2️⃣</p>
                <p className="text-2xl font-bold text-gray-900">AI Generates</p>
              </div>
              <div>
                <div className="text-6xl mb-4">✨</div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Step 2: AI Generates Drafts</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">Our AI analyzes each prospect and creates personalized email drafts. Each one is unique and relevant.</p>
                <p className="text-lg text-gray-600">Takes 10-30 seconds depending on list size. No credit card charged.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-4">📋</div>
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Step 3: Review & Export</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">Edit any email. Change the tone, add details, personalize further. Then export as CSV or copy individual emails.</p>
                <p className="text-lg text-gray-600">Works with Gmail, Outlook, HubSpot, Lemlist, and any email tool.</p>
              </div>
              <div className="bg-blue-50 p-12 rounded-xl border-2 border-blue-200 text-center">
                <p className="text-6xl mb-4">3️⃣</p>
                <p className="text-2xl font-bold text-gray-900">Export & Send</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Why This Workflow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-blue-600 mb-2">80%</p>
              <p className="text-gray-600">Faster than manual writing</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
              <p className="text-gray-600">Personalized. No templates.</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-blue-600 mb-2">$0</p>
              <p className="text-gray-600">Free plan available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Try it now</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Generating
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
