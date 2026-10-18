export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Generate 100 personalized emails in under 1 minute'
    },
    {
      icon: '🎯',
      title: 'Personalized',
      desc: 'Each email feels handwritten, not templated'
    },
    {
      icon: '💰',
      title: '100% Free to Start',
      desc: '50 emails/month free. No credit card needed'
    },
    {
      icon: '📥',
      title: 'Simple CSV Upload',
      desc: 'Just upload your leads. No complex setup'
    },
    {
      icon: '📊',
      title: 'Better Open Rates',
      desc: 'Personalized emails get 3-5x higher open rates'
    },
    {
      icon: '🔄',
      title: 'Export Anywhere',
      desc: 'Download emails as CSV or copy-paste to Gmail'
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Why OutreachGain?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Better results. Faster outreach. Zero cost to start.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
