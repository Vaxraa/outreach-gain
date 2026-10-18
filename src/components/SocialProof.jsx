import { useState } from 'react'

export default function SocialProof() {
  const [activeCase, setActiveCase] = useState(0)

  const caseStudies = [
    {
      company: 'TechCorp',
      result: '340 qualified meetings',
      quote: 'OutreachGain helped us scale outreach without hiring more SDRs. The personalization is insane.',
      author: 'Sarah Chen, VP Sales'
    },
    {
      company: 'GrowthAgency',
      result: '$2.1M pipeline generated',
      quote: 'We use this for every client now. The ROI is undeniable compared to manual outreach.',
      author: 'Marcus Johnson, Founder'
    },
    {
      company: 'ScaleFlow',
      result: '18% reply rate (vs 4% avg)',
      quote: 'The AI personalization feels natural. Our prospects actually respond instead of ignoring.',
      author: 'Elena Rodriguez, Head of Growth'
    }
  ]

  const current = caseStudies[activeCase]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Sales Teams</h2>
          <p className="text-xl text-gray-600">See how teams are scaling outreach with OutreachGain.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-12 shadow-lg">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wider font-semibold text-blue-600 mb-2">Case Study</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{current.company}</h3>
            <p className="text-2xl font-bold text-blue-600">{current.result}</p>
          </div>

          <blockquote className="mb-12">
            <p className="text-xl text-gray-700 italic leading-relaxed mb-6">"{current.quote}"</p>
            <footer className="text-gray-600 font-semibold">{current.author}</footer>
          </blockquote>

          <div className="flex gap-3 justify-center">
            {caseStudies.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === activeCase ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Case study ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-4xl font-bold text-blue-600 mb-2">2,400+</p>
            <p className="text-gray-600">Active users</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-4xl font-bold text-blue-600 mb-2">12M+</p>
            <p className="text-gray-600">Emails generated</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-4xl font-bold text-blue-600 mb-2">4.9★</p>
            <p className="text-gray-600">Average rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
