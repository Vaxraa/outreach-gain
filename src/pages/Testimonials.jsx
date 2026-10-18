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
          <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4">Customer Stories</p>
          <h1 className="text-5xl font-bold text-white mb-6">Real Results</h1>
          <p className="text-xl text-gray-400">See how teams are scaling with OutreachGain</p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testimonial */}
            <div className="bg-gray-800 border border-red-600 p-12 rounded-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl">{current.image}</div>
                <div>
                  <p className="font-bold text-lg text-white">{current.name}</p>
                  <p className="text-sm text-gray-400">{current.role} at {current.company}</p>
                </div>
              </div>

              <blockquote className="mb-8">
                <p className="text-xl text-gray-100 leading-relaxed italic">"{current.quote}"</p>
              </blockquote>

              <div className="pt-8 border-t border-gray-700">
                <p className="text-3xl font-bold text-red-500 mb-2">{current.metric}</p>
                <p className="text-sm text-gray-400">{current.result}</p>
              </div>
            </div>

            {/* Stats & Navigation */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center hover:border-red-600 transition cursor-pointer"
                  onClick={() => setActiveIdx(0)}
                  style={{ borderColor: activeIdx === 0 ? '#dc2626' : '#374151' }}>
                  <p className="text-3xl font-bold text-red-500">2,400+</p>
                  <p className="text-xs text-gray-400 mt-1">Active Users</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-center hover:border-red-600 transition cursor-pointer"
                  onClick={() => setActiveIdx(1)}
                  style={{ borderColor: activeIdx === 1 ? '#dc2626' : '#374151' }}>
                  <p className="text-3xl font-bold text-red-500">12M+</p>
                  <p className="text-xs text-gray-400 mt-1">Emails Generated</p>
                </div>
              </div>

              <div className="space-y-3">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition ${
                      activeIdx === i
                        ? 'border-red-600 bg-gray-800'
                        : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    }`}
                  >
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role} at {t.company}</p>
                    <p className="text-sm font-bold text-red-500 mt-2">{t.metric}</p>
                  </button>
                ))}
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">Rating</p>
                <p className="text-3xl font-bold text-red-500">4.9★</p>
                <p className="text-xs text-gray-500 mt-1">From 1,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gray-800 border-y border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Success Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">340</p>
              <p className="text-gray-400 mb-4">Avg qualified meetings/month</p>
              <p className="text-sm text-gray-500">From using OutreachGain</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">18%</p>
              <p className="text-gray-400 mb-4">Average reply rate</p>
              <p className="text-sm text-gray-500">vs 4% industry avg</p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg text-center hover:border-red-600 transition">
              <p className="text-4xl font-bold text-red-500 mb-2">80%</p>
              <p className="text-gray-400 mb-4">Time saved</p>
              <p className="text-sm text-gray-500">vs manual email writing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Join 2,400+ teams generating results</h3>
          <button
            onClick={() => onNavigate('generate')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Start Your Story
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
