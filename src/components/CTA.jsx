export default function CTA({ onGetStarted }) {
  return (
    <section className="bg-blue-600 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Send Better Cold Emails?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Start free today. 50 personalized emails. No credit card. No setup required.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
        >
          Get Started Now
        </button>
      </div>
    </section>
  )
}
