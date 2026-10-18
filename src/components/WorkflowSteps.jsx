import { useState } from 'react'

export default function WorkflowSteps() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      id: 1,
      title: 'Prospect Enrichment',
      desc: 'Your leads are automatically enriched with company context, recent news, and hiring signals.',
      icon: '📊'
    },
    {
      id: 2,
      title: 'AI Email Generation',
      desc: 'Personalized emails are generated based on prospect context and your target message.',
      icon: '✨'
    },
    {
      id: 3,
      title: 'Export & Send',
      desc: 'Download emails as CSV or copy-paste directly into your email tool or CRM.',
      icon: '📤'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Optimized Workflow</h2>
          <p className="text-xl text-gray-600">Three simple steps from CSV to personalized emails.</p>
        </div>

        {/* Step Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeStep === step.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Step {step.id}
            </button>
          ))}
        </div>

        {/* Step Details */}
        {steps.map((step) => (
          activeStep === step.id && (
            <div key={step.id} className="bg-gradient-to-br from-blue-50 to-gray-50 p-12 rounded-2xl border border-gray-200 text-center">
              <div className="text-6xl mb-6">{step.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{step.desc}</p>
            </div>
          )
        ))}
      </div>
    </section>
  )
}
