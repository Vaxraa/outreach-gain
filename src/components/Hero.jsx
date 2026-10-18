export default function Hero({ onGetStarted }) {
  return (
    <section className="bg-white text-gray-900 py-24 px-4 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Lead Lists Into Personalized Cold Emails
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Upload your lead list, generate tailored email drafts, review them, and export them in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Generate Your First Emails
              </button>
              <button
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition border border-gray-300"
              >
                See How It Works
              </button>
            </div>

            <div className="mt-12 flex gap-8 text-sm text-gray-600">
              <div>
                <div className="font-semibold text-gray-900">50 Emails/Month</div>
                <div>Free tier included</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">No Credit Card</div>
                <div>Required to start</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">5 Minutes</div>
                <div>To first results</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-600 uppercase">CSV Preview</label>
                <pre className="text-xs bg-gray-50 p-3 rounded border border-gray-200 overflow-x-auto">
{`name,company,role
John Smith,Acme Corp,VP Sales
Jane Doe,TechCo,CEO`}
                </pre>
              </div>
              <div className="border-t pt-4">
                <label className="text-xs font-semibold text-gray-600 uppercase">Generated Email</label>
                <div className="text-sm text-gray-700 mt-2 leading-relaxed space-y-2">
                  <p><strong>To:</strong> John Smith</p>
                  <p className="text-gray-600">Hi John,</p>
                  <p className="text-gray-600">I noticed Acme Corp is scaling their sales operations. We help B2B companies like yours reduce their sales cycle by streamlining outreach.</p>
                  <p className="text-gray-600">Would love a quick 15-min call to explore if there's a fit.</p>
                  <p className="text-gray-600">Best regards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
