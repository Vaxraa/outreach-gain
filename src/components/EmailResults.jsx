import { useState } from 'react'
import EmailCard from './EmailCard'

export default function EmailResults({ emails }) {
  const [copied, setCopied] = useState(null)

  const handleCopy = (idx) => {
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  const downloadCSV = () => {
    const csv = emails.map((e, i) =>
      `"${e.name}","${e.company}","${e.role}","${e.email.replace(/"/g, '""')}"`
    ).join('\n')

    const header = '"Name","Company","Role","Email"\n'
    const blob = new Blob([header + csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'personalized-emails.csv'
    a.click()
  }

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Generated Emails ({emails.length})
        </h2>
        <button
          onClick={downloadCSV}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-semibold"
        >
          Download CSV
        </button>
      </div>

      <div className="grid gap-4">
        {emails.map((email, idx) => (
          <EmailCard
            key={idx}
            email={email}
            onCopy={() => handleCopy(idx)}
            copied={copied === idx}
          />
        ))}
      </div>
    </div>
  )
}
