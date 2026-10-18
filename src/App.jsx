import { useState } from 'react'
import Home from './pages/Home'
import Features from './pages/Features'
import HowItWorks from './pages/HowItWorks'
import ROI from './pages/ROI'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Generate from './pages/Generate'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const pages = {
    home: <Home onNavigate={setCurrentPage} />,
    features: <Features onNavigate={setCurrentPage} />,
    howItWorks: <HowItWorks onNavigate={setCurrentPage} />,
    roi: <ROI onNavigate={setCurrentPage} />,
    testimonials: <Testimonials onNavigate={setCurrentPage} />,
    pricing: <Pricing onNavigate={setCurrentPage} />,
    faq: <FAQ onNavigate={setCurrentPage} />,
    generate: <Generate onNavigate={setCurrentPage} />
  }

  return (
    <div className="min-h-screen bg-white">
      {pages[currentPage]}
    </div>
  )
}
