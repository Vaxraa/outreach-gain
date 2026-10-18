import { useState } from 'react'

export default function SocialProof() {
  const [activeCase, setActiveCase] = useState(1)

  const cases = [
    {
      id: 1,
      company: 'TechCorp SaaS',
      result: '4x Pipeline Increase',
      quote: 'OutreachGain replaced our 3 manual tools and doubled meetings in 60 days.',
      author: 'Michael Vance, VP Sales'
    },
    {
      id: 2,
      company: 'GrowthAgency Pro',
      result: '140+ Meetings/Month',
      quote: 'Managing 30+ client accounts became effortless with automated warmup.',
      author: 'Sarah Lin, Founder'
    },
    {
      id: 3,
      company: 'ScaleFlow AI',
      result: '18.9% Reply Rate',
      quote: 'Trigger signal enrichment boosted our reply rate by 5x.',
      author: 'David Miller, Head of Revenue'
    }
  ]

  const active = cases.find(c => c.id === activeCase)

  return (
    <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Sales Teams</h2>
          <p className="text-xl text-gray-600">See how customers are using OutreachGain.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Case Study Selector */}
          <div className="space-y-4">
            {cases.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setActiveCase(cs.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition ${
                  activeCase === cs.id
                    ? 'bg-blue-50 border-blue-600'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-sm font-semibold text-blue-600">{cs.company}</div>
                <div className="text-lg font-bold text-gray-900 mt-1">{cs.result}</div>
              </button>
            ))}
          </div>

          {/* Case Study Details */}
          {active && (
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">"{active.quote}"</p>
              <p className="text-sm font-semibold text-gray-900">{active.author}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
