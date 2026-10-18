import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import PrivacyTrust from './components/PrivacyTrust'
import ROISection from './components/ROISection'
import TestimonialSection from './components/TestimonialSection'

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
      <ROISection />
      <TestimonialSection />
      <Pricing />
      <FAQ />
      <PrivacyTrust />
      <CTA onGetStarted={() => setShowApp(true)} />
      <Footer />
    </div>
  )
}

// Email generation app
function AppPage({ onBack }) {
  const [csvData, setCsvData] = useState('')
  const [leads, setLeads] = useState([])
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [step, setStep] = useState('upload')
  const [copiedIdx, setCopiedIdx] = useState(null)

  const validateAndParse = () => {
    if (!csvData.trim()) {
      setError('Please paste CSV data')
      return null
    }

    const lines = csvData.trim().split('\n')
    if (lines.length < 2) {
      setError('CSV must have at least one header row and one data row')
      return null
    }

    const headers = lines[0].toLowerCase().split(',').map(h => h.trim())
    const nameIdx = headers.indexOf('name')
    const companyIdx = headers.indexOf('company')
    const roleIdx = headers.indexOf('role')

    if (nameIdx === -1 || companyIdx === -1 || roleIdx === -1) {
      setError('CSV must have columns: Name, Company, Role')
      return null
    }

    const parsedLeads = []
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue
      const cols = lines[i].split(',').map(c => c.trim())
      if (cols.length > nameIdx && cols.length > companyIdx && cols.length > roleIdx) {
        parsedLeads.push({
          name: cols[nameIdx],
          company: cols[companyIdx],
          role: cols[roleIdx]
        })
      }
    }

    if (parsedLeads.length === 0) {
      setError('No valid leads found in CSV')
      return null
    }

    return parsedLeads
  }

  const handlePreview = () => {
    setError('')
    const parsed = validateAndParse()
    if (parsed) {
      setLeads(parsed)
      setStep('preview')
    }
  }

  const handleGenerate = async () => {
    if (leads.length === 0) return

    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/generate-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leads })
      })

      if (!response.ok) throw new Error('Generation failed')

      const data = await response.json()
      setEmails(data.emails)
      setStep('results')
      setSuccess(`Generated ${data.emails.length} email drafts`)
    } catch (err) {
      setError(err.message || 'Error generating emails')
    } finally {
      setLoading(false)
    }
  }

  const copyEmail = (idx) => {
    navigator.clipboard.writeText(emails[idx].email)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
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
    a.download = `outreach-emails-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const reset = () => {
    setCsvData('')
    setLeads([])
    setEmails([])
    setError('')
    setSuccess('')
    setStep('upload')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Generate Emails</h1>
          <button
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8">
          {['upload', 'preview', 'results'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                step === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {i + 1}
              </div>
              {i < 2 && <div className={`w-8 h-0.5 ${step !== 'upload' ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>

        {step === 'upload' && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Upload Your Leads</h2>
            <p className="text-gray-600 mb-6">Paste CSV data with columns: Name, Company, Role</p>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">CSV Data</label>
              <textarea
                value={csvData}
                onChange={(e) => { setCsvData(e.target.value); setError(''); }}
                placeholder="name,company,role&#10;John Smith,Acme Corp,VP Sales&#10;Jane Doe,TechCo,CEO"
                className="w-full h-48 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {error && <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

            <button
              onClick={handlePreview}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Preview Leads
            </button>
          </div>
        )}

        {step === 'preview' && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Review Leads</h2>
            <p className="text-gray-600 mb-6">{leads.length} leads ready to generate emails</p>

            <div className="mb-8 max-h-96 overflow-y-auto border border-gray-200 rounded-lg bg-gray-50 p-4">
              <table className="w-full text-sm">
                <thead className="bg-white sticky top-0 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-2 px-3 font-semibold">Name</th>
                    <th className="text-left py-2 px-3 font-semibold">Company</th>
                    <th className="text-left py-2 px-3 font-semibold">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leads.map((lead, i) => (
                    <tr key={i} className="hover:bg-white">
                      <td className="py-2 px-3 text-gray-900">{lead.name}</td>
                      <td className="py-2 px-3 text-gray-600">{lead.company}</td>
                      <td className="py-2 px-3 text-gray-600">{lead.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('upload')}
                className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                ← Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? 'Generating...' : 'Generate Emails'}
              </button>
            </div>
          </div>
        )}

        {step === 'results' && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Generated Emails</h2>
                <p className="text-gray-600 mt-1">{emails.length} emails ready to use</p>
              </div>
              {success && <p className="text-green-700 bg-green-50 px-4 py-2 rounded-lg text-sm">{success}</p>}
            </div>

            <div className="mb-6 flex gap-3">
              <button
                onClick={downloadCSV}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                ⬇ Download CSV
              </button>
              <button
                onClick={reset}
                className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Start Over
              </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {emails.map((email, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{email.name}</h3>
                      <p className="text-sm text-gray-600">{email.role} at {email.company}</p>
                    </div>
                    <button
                      onClick={() => copyEmail(idx)}
                      className={`px-3 py-1 rounded text-sm font-semibold transition ${
                        copiedIdx === idx
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      {copiedIdx === idx ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {email.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
