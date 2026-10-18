export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Upload CSV',
      desc: 'Name, Company, Role - that\'s all we need'
    },
    {
      num: '2',
      title: 'AI Generates',
      desc: 'Personalized emails created in seconds'
    },
    {
      num: '3',
      title: 'Copy & Send',
      desc: 'Paste into Gmail, HubSpot, Lemlist, or any tool'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-lg font-bold mb-4">Example</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">You Upload:</p>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
name,company,role
John Smith,TechCorp,VP Sales
Jane Doe,StartupXYZ,CEO
              </pre>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">You Get:</p>
              <div className="bg-blue-50 p-4 rounded text-sm">
                <p className="font-semibold mb-2">To: John Smith</p>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Hi John,<br/>
                  I noticed TechCorp is scaling their sales team. We help tech companies like yours reduce sales cycle by 40%.<br/>
                  Worth a quick 15-min call?<br/>
                  Best
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
