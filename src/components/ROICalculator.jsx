export default function ROICalculator() {
  const [volume, setVolume] = useState(15000)
  const [replyRate, setReplyRate] = useState(12)
  const [dealValue, setDealValue] = useState(12000)

  const qualifiedMeetings = Math.round((volume * replyRate / 100) * 0.20)
  const pipelineGenerated = qualifiedMeetings * (dealValue * 0.5)
  const roiMultiplier = Math.round(pipelineGenerated / 299)

  return (
    <section className="py-20 px-4 bg-white border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">See Your ROI Potential</h2>
          <p className="text-xl text-gray-600">Adjust the sliders to estimate your outreach impact.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Sliders */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-900">Monthly Emails Sent</label>
                <span className="text-blue-600 font-bold">{volume.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="1000"
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-900">Target Reply Rate %</label>
                <span className="text-blue-600 font-bold">{replyRate}%</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="0.5"
                value={replyRate}
                onChange={(e) => setReplyRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-semibold text-gray-900">Average Deal Value ($)</label>
                <span className="text-blue-600 font-bold">${dealValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={dealValue}
                onChange={(e) => setDealValue(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-xs text-gray-600 uppercase tracking-wider font-semibold mb-3">Cost Comparison</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Manual BDR:</p>
                  <p className="text-lg font-bold text-red-600">$6,500/mo</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">OutreachGain:</p>
                  <p className="text-lg font-bold text-green-600">$299/mo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl border border-gray-200">
            <div className="space-y-8">
              <div>
                <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">Estimated Monthly Pipeline</p>
                <p className="text-5xl font-bold text-blue-600 mt-2">${pipelineGenerated.toLocaleString()}</p>
                <p className="text-xs text-gray-600 mt-1">New revenue generated every month</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-300">
                <div>
                  <p className="text-sm text-gray-600">Qualified Meetings/Mo</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{qualifiedMeetings}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">ROI Multiplier</p>
                  <p className="text-3xl font-bold text-blue-600 mt-1">{roiMultiplier}x</p>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Start Free Trial with This Volume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
