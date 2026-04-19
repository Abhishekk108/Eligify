import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import EligibilityPage from './pages/EligibilityPage'
import SchemesPage from './pages/SchemesPage'
import TrackerPage from './pages/TrackerPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
