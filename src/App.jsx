import { useState } from 'react'
import Header from './components/Header'
import CSVUpload from './components/CSVUpload'
import EmailResults from './components/EmailResults'
import PricingModal from './components/PricingModal'
import { useFreeTierLimit } from './hooks/useFreeTierLimit'

export default function App() {
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPricing, setShowPricing] = useState(false)
  const { used, limit, canUse, incrementUse } = useFreeTierLimit()

  const handleGenerateEmails = async (leads) => {
    if (!canUse()) {
      setShowPricing(true)
      return
    }

    setLoading(true)
    setError('')
    setEmails([])

    try {
      const response = await fetch('/api/generate-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leads })
      })

      if (!response.ok) throw new Error('Failed to generate emails')

      const data = await response.json()
      setEmails(data.emails)
      incrementUse()
    } catch (err) {
      setError(err.message || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header used={used} limit={limit} onUpgrade={() => setShowPricing(true)} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Personalize Cold Emails at Scale
          </h1>
          <p className="text-lg text-gray-600">
            Upload a CSV of leads. AI generates personalized emails in seconds.
          </p>
        </div>

        <CSVUpload onGenerate={handleGenerateEmails} loading={loading} />

        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {emails.length > 0 && <EmailResults emails={emails} />}

        {showPricing && <PricingModal onClose={() => setShowPricing(false)} />}
      </main>
    </div>
  )
}
