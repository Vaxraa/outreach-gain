import { useState } from 'react'

export default function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP Sales at TechCorp',
      company: 'TechCorp',
      image: '👩‍💼',
      quote: 'OutreachGain cut our email creation time by 80%. We went from 10 hours/week to 1. Our reply rate jumped from 4% to 12%.',
      metric: '340 qualified meetings',
      industry: 'SaaS'
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder at GrowthAgency',
      company: 'GrowthAgency',
      image: '👨‍💼',
      quote: 'We use this for every client now. The personalization is so good our prospects think humans wrote them. Sales team loves it.',
      metric: '$2.1M pipeline',
      industry: 'Agency'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Growth at ScaleFlow',
      company: 'ScaleFlow',
      image: '👩‍🔬',
      quote: 'No credit card needed to start. Free plan is legit. Upgraded after seeing the results. Best ₹299 we spend monthly.',
      metric: '18% reply rate',
      industry: 'Tech'
    }
  ]

  const current = testimonials[activeIdx]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Sales Teams Love OutreachGain</h2>
          <p className="text-xl text-gray-600">Real results from real users</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Testimonial */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl border border-blue-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl">{current.image}</div>
              <div>
                <p className="font-bold text-gray-900">{current.name}</p>
                <p className="text-sm text-gray-600">{current.role}</p>
              </div>
            </div>

            <blockquote className="mb-8">
              <p className="text-xl text-gray-900 leading-relaxed italic">"{current.quote}"</p>
            </blockquote>

            <div className="pt-8 border-t border-blue-200">
              <p className="text-2xl font-bold text-blue-600">{current.metric}</p>
              <p className="text-sm text-gray-600 mt-1">Achieved with OutreachGain</p>
            </div>
          </div>

          {/* Stats & Navigation */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:shadow-lg transition cursor-pointer"
                onClick={() => setActiveIdx(0)}
                style={{ borderColor: activeIdx === 0 ? '#2563eb' : '#e5e7eb', backgroundColor: activeIdx === 0 ? '#eff6ff' : '#ffffff' }}>
                <p className="text-3xl font-bold text-blue-600">2,400+</p>
                <p className="text-xs text-gray-600 mt-1">Active Users</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:shadow-lg transition cursor-pointer"
                onClick={() => setActiveIdx(1)}
                style={{ borderColor: activeIdx === 1 ? '#2563eb' : '#e5e7eb', backgroundColor: activeIdx === 1 ? '#eff6ff' : '#ffffff' }}>
                <p className="text-3xl font-bold text-blue-600">12M+</p>
                <p className="text-xs text-gray-600 mt-1">Emails Generated</p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl text-center hover:shadow-lg transition cursor-pointer"
                onClick={() => setActiveIdx(2)}
                style={{ borderColor: activeIdx === 2 ? '#2563eb' : '#e5e7eb', backgroundColor: activeIdx === 2 ? '#eff6ff' : '#ffffff' }}>
                <p className="text-3xl font-bold text-blue-600">4.9★</p>
                <p className="text-xs text-gray-600 mt-1">User Rating</p>
              </div>
            </div>

            <div className="space-y-4">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition ${
                    activeIdx === i
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                  <p className="text-sm font-bold text-blue-600 mt-2">{t.metric}</p>
                </button>
              ))}
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl">
              <p className="font-semibold mb-2">Ready to join them?</p>
              <p className="text-sm text-blue-100 mb-4">Start free. No credit card. 50 emails/month.</p>
              <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50 transition">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
