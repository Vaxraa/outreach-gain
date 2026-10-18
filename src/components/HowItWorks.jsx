export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Upload Your CSV',
      desc: 'Import lead details: name, company, role, and any context that makes emails more personalized.'
    },
    {
      num: '2',
      title: 'Generate Personalized Drafts',
      desc: 'Our system creates relevant email subject lines and messages for each lead.'
    },
    {
      num: '3',
      title: 'Review and Export',
      desc: 'Edit drafts as needed, copy individual emails, or download everything as CSV.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to personalized cold emails.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-1/3 h-1 bg-gray-200 transform translate-x-1/2"></div>
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-md">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Example Workflow</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label className="text-sm font-semibold text-gray-600 uppercase block mb-3">Step 1: Your CSV</label>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <pre className="text-xs text-gray-700 overflow-x-auto font-mono">{`name,company,role
John Smith,Acme,VP Sales
Jane Doe,TechCo,CEO`}</pre>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-gray-400 text-2xl font-bold">→</div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-600 uppercase block mb-3">Step 2–3: Generated Email</label>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-sm text-gray-700 space-y-2">
                <p><strong>To:</strong> John Smith</p>
                <p className="text-xs text-gray-600">Acme • VP Sales</p>
                <div className="border-t pt-2 mt-2">
                  <p className="text-gray-600 leading-relaxed">
                    Hi John, I noticed Acme is in the HR tech space. We help companies scale their recruiting. Worth a quick chat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
