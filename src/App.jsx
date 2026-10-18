import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [showApp, setShowApp] = useState(false)

  if (showApp) {
    return <AppPage onBack={() => setShowApp(false)} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={() => setShowApp(true)} />
      <Hero onGetStarted={() => setShowApp(true)} />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA onGetStarted={() => setShowApp(true)} />
      <Footer />
    </div>
  )
}

// App page (original functionality)
function AppPage({ onBack }) {
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [csvData, setCsvData] = useState('')
  const [used, setUsed] = useState(0)

  const handleGenerate = async () => {
    if (!csvData.trim()) {
      setError('Please paste CSV data')
      return
    }

    // Parse CSV
    const lines = csvData.trim().split('\n')
    const headers = lines[0].toLowerCase().split(',').map(h => h.trim())
    const nameIdx = headers.indexOf('name')
    const companyIdx = headers.indexOf('company')
    const roleIdx = headers.indexOf('role')

    if (nameIdx === -1 || companyIdx === -1 || roleIdx === -1) {
      setError('CSV must have Name, Company, Role columns')
      return
    }

    const leads = []
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue
      const cols = lines[i].split(',').map(c => c.trim())
      leads.push({
        name: cols[nameIdx],
        company: cols[companyIdx],
        role: cols[roleIdx]
      })
    }

    if (leads.length === 0) {
      setError('No leads found')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/generate-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leads })
      })

      const data = await response.json()
      setEmails(data.emails)
      setUsed(used + 1)
    } catch (err) {
      setError('Error generating emails')
    } finally {
      setLoading(false)
    }
  }

  const downloadCSV = () => {
    const csv = emails.map(e =>
      `"${e.name}","${e.company}","${e.role}","${e.email.replace(/"/g, '""')}"`
    ).join('\n')
    const header = '"Name","Company","Role","Email"\n'
    const blob = new Blob([header + csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'emails.csv'
    a.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-700 mb-6 font-semibold"
        >
          ← Back
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Generate Emails</h1>
          <p className="text-gray-600 mb-6">Used: {used}/50 this month</p>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Paste CSV Data</label>
            <textarea
              value={csvData}
              onChange={(e) => setCsvData(e.target.value)}
              placeholder="name,company,role&#10;John Doe,Acme Corp,VP Sales&#10;Jane Smith,TechCo,CEO"
              className="w-full h-40 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            onClick={handleGenerate}
            disabled={loading || !csvData.trim()}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Generate Emails'}
          </button>

          {emails.length > 0 && (
            <div className="mt-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Results ({emails.length})</h2>
                <button
                  onClick={downloadCSV}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Download CSV
                </button>
              </div>

              <div className="space-y-4">
                {emails.map((email, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold">{email.name}</h3>
                    <p className="text-sm text-gray-600">{email.role} at {email.company}</p>
                    <div className="bg-gray-50 p-3 rounded mt-3 text-sm whitespace-pre-wrap">
                      {email.email}
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(email.email)
                        alert('Copied!')
                      }}
                      className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-semibold"
                    >
                      Copy Email
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
