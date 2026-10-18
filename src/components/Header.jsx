export default function Header({ used, limit, onUpgrade }) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">OutreachGain</h1>
          <p className="text-sm text-gray-600">{used}/{limit} emails generated</p>
        </div>
        <button
          onClick={onUpgrade}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Upgrade
        </button>
      </div>
    </header>
  )
}
