import { useState, useEffect } from 'react'

const FREE_LIMIT = 50 // 50 emails/month free tier

export function useFreeTierLimit() {
  const [used, setUsed] = useState(0)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('outreach_free_tier') || '{}')
    const currentMonth = new Date().toISOString().slice(0, 7)

    if (stored.month !== currentMonth) {
      stored.month = currentMonth
      stored.used = 0
      localStorage.setItem('outreach_free_tier', JSON.stringify(stored))
    }

    setUsed(stored.used || 0)
  }, [])

  const canUse = () => used < FREE_LIMIT

  const incrementUse = (count = 1) => {
    const stored = JSON.parse(localStorage.getItem('outreach_free_tier') || '{}')
    stored.used = (stored.used || 0) + count
    localStorage.setItem('outreach_free_tier', JSON.stringify(stored))
    setUsed(stored.used)
  }

  return {
    used,
    limit: FREE_LIMIT,
    canUse,
    incrementUse
  }
}
