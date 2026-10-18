export default function Pricing({ onUpgrade }) {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      emails: '50 emails/month',
      features: [
        '50 personalized emails/month',
        'CSV upload',
        'Copy & download',
        'Community support'
      ],
      cta: 'Get Started',
      highlight: false
    },
    {
      name: 'Pro',
      price: '₹299',
      period: '/month',
      emails: 'Unlimited emails',
      features: [
        'Unlimited emails/month',
        'Priority support',
        'API access (coming soon)',
        'Advanced personalization',
        'Bulk lead import',
        'Team collaboration'
      ],
      cta: 'Upgrade Now',
      highlight: true
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg p-8 transition ${
                plan.highlight
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-2 border-blue-600'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : ''}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.emails}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-bold mb-6 transition ${
                  plan.highlight
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start">
                    <span className="mr-3">✓</span>
                    <span className={plan.highlight ? 'text-blue-50' : 'text-gray-700'}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto">
          No credit card required for free plan. Upgrade anytime. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
