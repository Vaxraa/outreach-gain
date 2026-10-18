import { useState } from 'react'

export default function Testimonials({ onNavigate }) {
  const [activeIdx, setActiveIdx] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP Sales',
      company: 'TechCorp',
      image: '👩‍💼',
      quote: 'OutreachGain cut our email creation time from 10 hours/week to 1 hour. Reply rate jumped from 4% to 12%. Game changer.',
      metric: '340 qualified meetings',
      result: '4x increase in pipeline'
    },
    {
      name: 'Marcus Johnson',
      role: 'Founder',
      company: 'GrowthAgency',
      image: '👨‍💼',
      quote: 'We use this for every client now. The personalization is so good prospects think humans wrote them. Sales team loves it.',
      metric: '$2.1M pipeline',
      result: '140+ meetings/month'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Growth',
      company: 'ScaleFlow',
      image: '👩‍🔬',
      quote: 'No credit card needed to start. Free plan is legit. Upgraded after seeing results. Best ₹299 we spend monthly.',
      metric: '18.9% reply rate',
      result: '5x improvement'
    }
  ]

  const current = testimonials[activeIdx]

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
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Customer Stories</h1>
          <p className="text-xl text-gray-600">Real results from real users</p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl border border-blue-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl">{current.image}</div>
                <div>
                  <p className="font-bold text-lg text-gray-900">{current.name}</p>
                  <p className="text-sm text-gray-600">{current.role} at {current.company}</p>
                </div>
              </div>

              <blockquote className="mb-8">
                <p className="text-xl text-gray-900 leading-relaxed italic">"{current.quote}"</p>
              </blockquote>

              <div className="pt-8 border-t border-blue-200">
                <p className="text-3xl font-bold text-blue-600 mb-2">{current.metric}</p>
                <p className="text-sm text-gray-600">{current.result}</p>
              </div>
            </div>

            {/* Stats & Navigation */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
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
              </div>

              <div className="space-y-3">
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
                    <p className="text-sm text-gray-600">{t.role} at {t.company}</p>
                    <p className="text-sm font-bold text-blue-600 mt-2">{t.metric}</p>
                  </button>
                ))}
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl">
                <p className="text-sm text-gray-600 mb-2">Rating</p>
                <p className="text-3xl font-bold text-blue-600">4.9★</p>
                <p className="text-xs text-gray-600 mt-1">From 1,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">340</p>
              <p className="text-gray-600 mb-4">Avg qualified meetings/month</p>
              <p className="text-sm text-gray-500">From using OutreachGain</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">18%</p>
              <p className="text-gray-600 mb-4">Average reply rate</p>
              <p className="text-sm text-gray-500">vs 4% industry avg</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">80%</p>
              <p className="text-gray-600 mb-4">Time saved</p>
              <p className="text-sm text-gray-500">vs manual email writing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Join 2,400+ teams generating results</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Your Story
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
