export default function PricingModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Upgrade to Unlimited</h2>
        <p className="text-gray-600 mb-6">
          You've used all your free emails this month. Upgrade to unlock unlimited personalized emails.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-3xl font-bold text-blue-600">₹499/month</p>
          <p className="text-sm text-gray-600 mt-1">Unlimited emails</p>
        </div>

        <a
          href="https://stripe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3"
        >
          Upgrade Now
        </a>

        <button
          onClick={onClose}
          className="w-full text-gray-600 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Maybe Later
        </button>
      </div>
    </div>
  )
}
