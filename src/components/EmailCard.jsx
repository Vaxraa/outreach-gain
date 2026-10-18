export default function EmailCard({ email, onCopy, copied }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{email.name}</h3>
        <p className="text-sm text-gray-600">{email.role} at {email.company}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-4 max-h-40 overflow-y-auto">
        <p className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
          {email.email}
        </p>
      </div>

      <button
        onClick={onCopy}
        className={`w-full py-2 rounded-lg font-semibold transition text-sm ${
          copied
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
        }`}
      >
        {copied ? '✓ Copied!' : 'Copy Email'}
      </button>
    </div>
  )
}
