export default function PrivacyTrust() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Privacy & Trust</h2>
          <p className="text-lg text-gray-600">How we handle your data.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">🔐 Your Data</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Leads are never stored or logged</li>
              <li>✓ Processed in-memory only</li>
              <li>✓ Deleted immediately after email generation</li>
              <li>✓ No tracking pixels or analytics on emails</li>
              <li>✓ No selling or sharing data with third parties</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">⚖️ Free Plan</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✓ 50 emails/month, no credit card</li>
              <li>✓ Full access to all core features</li>
              <li>✓ Free plan resets monthly</li>
              <li>✓ No email limits on individual emails</li>
              <li>✓ Cancel Pro anytime, free plan continues</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">📋 What We Collect</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To provide OutreachGain, we collect:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>• <strong>Lead CSV data</strong> (temporarily, during generation only)</li>
            <li>• <strong>Usage metrics</strong> (emails generated per month, basic aggregation)</li>
            <li>• <strong>No PII</strong> beyond what you provide in leads</li>
            <li>• <strong>No email sending</strong> — we never send emails on your behalf</li>
          </ul>

          <p className="text-gray-600 text-sm mt-6">
            For full details, see our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
