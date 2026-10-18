import { useState } from 'react'

export default function ROISection() {
  const [volume, setVolume] = useState(15000)
  const [replyRate, setReplyRate] = useState(12)
  const [dealValue, setDealValue] = useState(12000)

  const qualifiedMeetings = Math.round((volume * replyRate / 100) * 0.20)
  const pipelineGenerated = qualifiedMeetings * (dealValue * 0.5)
  const roiMultiplier = Math.round(pipelineGenerated / 299)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600">See how much pipeline you can generate</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                <label className="text-sm font-semibold text-gray-900">Reply Rate</label>
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
              <p className="text-gray-600">New revenue from personalized outreach</p>
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
              <p className="text-sm opacity-90 mb-2">OutreachGain Pro: <span className="font-bold">₹299/month</span></p>
              <p className="text-sm opacity-90">vs Manual BDR: <span className="line-through">$6,500/month</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
