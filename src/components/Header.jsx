export default function Header({ onGetStarted }) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">📧 OutreachGain</h1>
          <p className="text-xs text-gray-600">AI Cold Email Generator</p>
        </div>
        <button
          onClick={onGetStarted}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Get Started
        </button>
      </div>
    </header>
  )
}
