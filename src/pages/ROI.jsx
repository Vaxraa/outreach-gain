import { useState } from 'react'

export default function ROI({ onNavigate }) {
  const [volume, setVolume] = useState(15000)
  const [replyRate, setReplyRate] = useState(12)
  const [dealValue, setDealValue] = useState(12000)

  const qualifiedMeetings = Math.round((volume * replyRate / 100) * 0.20)
  const pipelineGenerated = qualifiedMeetings * (dealValue * 0.5)
  const roiMultiplier = Math.round(pipelineGenerated / 299)

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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Calculate Your ROI</h1>
          <p className="text-xl text-gray-600">See how much pipeline you can generate with OutreachGain</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Sliders */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-900">Monthly Emails</label>
                  <span className="text-2xl font-bold text-blue-600">{volume.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>2K</span>
                  <span>100K</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-900">Reply Rate %</label>
                  <span className="text-2xl font-bold text-blue-600">{replyRate}%</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  step="0.5"
                  value={replyRate}
                  onChange={(e) => setReplyRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>2%</span>
                  <span>25%</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-900">Avg Deal Value</label>
                  <span className="text-2xl font-bold text-blue-600">${dealValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$1K</span>
                  <span>$100K</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-2">Monthly Pipeline</p>
                <p className="text-5xl font-bold text-blue-600 mb-2">${pipelineGenerated.toLocaleString()}</p>
                <p className="text-gray-600">New revenue generated monthly</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">Qualified Meetings</p>
                  <p className="text-3xl font-bold text-gray-900">{qualifiedMeetings}</p>
                  <p className="text-xs text-gray-500 mt-1">/month</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-600 font-semibold mb-2">ROI Multiplier</p>
                  <p className="text-3xl font-bold text-green-600">{roiMultiplier}x</p>
                  <p className="text-xs text-gray-500 mt-1">vs plan cost</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                <p className="text-sm opacity-90 mb-2">OutreachGain Pro</p>
                <p className="text-3xl font-bold mb-4">₹299/month</p>
                <p className="text-sm opacity-90 mb-4">vs Manual BDR: $6,500/month</p>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Real Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">340</p>
              <p className="text-gray-600">Qualified meetings/month avg</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">18%</p>
              <p className="text-gray-600">Average reply rate</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">80%</p>
              <p className="text-gray-600">Time saved vs manual</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Start generating pipeline today</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Free
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
