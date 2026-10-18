import { useState } from 'react'

export default function WorkflowSteps() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: 'Upload & Enrich',
      description: 'Import your lead list as CSV. We handle data cleaning and basic company context lookup.',
      icon: '📤'
    },
    {
      title: 'AI Generates',
      description: 'Our AI creates personalized email drafts based on each lead\'s role, company, and industry.',
      icon: '✨'
    },
    {
      title: 'Review & Export',
      description: 'Edit, refine, and export emails as CSV. Integrate with your email or CRM in seconds.',
      icon: '📤'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white border-y border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to personalized outreach.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              className={`p-8 rounded-lg border-2 cursor-pointer transition ${
                activeStep === i
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className={`inline-block w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  activeStep === i
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-0.5 ml-4 bg-gray-200"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Why this workflow?</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✓ Upload once, generate unlimited variations</li>
            <li>✓ Full control over personalization level</li>
            <li>✓ Export to any email or CRM platform</li>
            <li>✓ No credit card required to start</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
