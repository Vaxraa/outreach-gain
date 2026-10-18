export default function Hero({ onGetStarted }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Personalize Cold Emails at Scale</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Stop sending generic emails. Upload a CSV of leads, get personalized cold emails in seconds. 100% free.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
        >
          Try Now - 50 Emails Free
        </button>
      </div>
    </section>
  )
}
