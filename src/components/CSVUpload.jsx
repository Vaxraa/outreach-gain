import { useState } from 'react'

export default function CSVUpload({ onGenerate, loading }) {
  const [csvData, setCsvData] = useState('')
  const [error, setError] = useState('')

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      setCsvData(event.target?.result || '')
      setError('')
    }
    reader.readAsText(file)
  }

  const parseCSV = () => {
    if (!csvData.trim()) {
      setError('Please upload or paste CSV data')
      return null
    }

    const lines = csvData.trim().split('\n')
    const headers = lines[0].toLowerCase().split(',').map(h => h.trim())

    const nameIdx = headers.indexOf('name')
    const companyIdx = headers.indexOf('company')
    const roleIdx = headers.indexOf('role')
    const linkedinIdx = headers.indexOf('linkedin') // optional

    if (nameIdx === -1 || companyIdx === -1 || roleIdx === -1) {
      setError('CSV must have Name, Company, Role columns')
      return null
    }

    const leads = []
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue

      const cols = lines[i].split(',').map(c => c.trim())
      leads.push({
        name: cols[nameIdx],
        company: cols[companyIdx],
        role: cols[roleIdx],
        linkedin: linkedinIdx !== -1 ? cols[linkedinIdx] : ''
      })
    }

    return leads.length > 0 ? leads : null
  }

  const handleGenerate = () => {
    const leads = parseCSV()
    if (leads) {
      onGenerate(leads)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Upload CSV</h2>
        <p className="text-gray-600 text-sm mb-4">
          Format: Name, Company, Role, LinkedIn (optional)
        </p>

        <label className="block">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </label>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 text-sm mb-2">Or paste CSV data:</p>
        <textarea
          value={csvData}
          onChange={(e) => {
            setCsvData(e.target.value)
            setError('')
          }}
          placeholder="name,company,role,linkedin&#10;John Doe,Acme Corp,Marketing Manager,linkedin.com/in/johndoe&#10;Jane Smith,TechCo,Sales Lead,linkedin.com/in/janesmith"
          className="w-full h-32 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <button
        onClick={handleGenerate}
        disabled={loading || !csvData.trim()}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Generating...' : 'Generate Emails'}
      </button>
    </div>
  )
}
