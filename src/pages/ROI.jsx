import { useState } from 'react'

export default function ROI({ onNavigate }) {
  const [volume, setVolume] = useState(15000)
  const [replyRate, setReplyRate] = useState(12)
  const [dealValue, setDealValue] = useState(12000)

  const qualifiedMeetings = Math.round((volume * replyRate / 100) * 0.20)
  const pipelineGenerated = qualifiedMeetings * (dealValue * 0.5)
  const roiMultiplier = Math.round(pipelineGenerated / 299)

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
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Calculate Impact</p>
          <h1 className="text-5xl font-bold text-white mb-6">Your ROI Potential</h1>
          <p className="text-xl text-gray-400">See how much pipeline you can generate with OutreachGain</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sliders */}
            <div className="space-y-8">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-white">Monthly Emails</label>
                  <span className="text-2xl font-bold text-red-500">{volume.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-white">Reply Rate %</label>
                  <span className="text-2xl font-bold text-red-500">{replyRate}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={replyRate}
                  onChange={(e) => setReplyRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-white">Avg Deal Value</label>
                  <span className="text-2xl font-bold text-red-500">${dealValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-gray-800 border border-red-600 p-8 rounded-lg">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2">Monthly Pipeline</p>
                <p className="text-5xl font-bold text-red-500 mb-2">${pipelineGenerated.toLocaleString()}</p>
                <p className="text-gray-400">New revenue generated monthly</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 font-semibold mb-2">Qualified Meetings</p>
                  <p className="text-3xl font-bold text-white">{qualifiedMeetings}</p>
                  <p className="text-xs text-gray-500 mt-1">/month</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                  <p className="text-sm text-gray-400 font-semibold mb-2">ROI Multiplier</p>
                  <p className="text-3xl font-bold text-red-500">{roiMultiplier}x</p>
                  <p className="text-xs text-gray-500 mt-1">vs plan cost</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg text-white">
                <p className="text-sm opacity-90 mb-2">OutreachGain Pro</p>
                <p className="text-3xl font-bold mb-4">₹299/month</p>
                <p className="text-sm opacity-90 mb-4">vs Manual BDR: $6,500/month</p>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full bg-white text-red-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">340</p>
              <p className="text-gray-400">Qualified meetings/month avg</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">18%</p>
              <p className="text-gray-400">Average reply rate</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">80%</p>
              <p className="text-gray-400">Time saved vs manual</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Start generating pipeline today</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Free
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
