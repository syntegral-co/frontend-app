import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import ProtectedRoute from './components/protected-route'
import Demo from './pages'
import CompanySwitcher from './components/company-switcher'
import Company from './pages/companies'
import ImpactAreas from './pages/areas'
import Dashboard from './pages/dashboard'
import NotFound from './pages/404'

function App() {
  useEffect(() => {
    const sessionId = uuidv4()
    localStorage.setItem('sessionId', sessionId)

    return () => {
      localStorage.removeItem('sessionId')
    }
  }, [])

  return (
    <div className="container mx-auto mt-4 h-screen py-6">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Demo />
            </ProtectedRoute>
          }
        >
          <Route index element={<CompanySwitcher />} />
          <Route path="companies/:company" element={<ImpactAreas />} />
          <Route path="companies/:company/themes/:theme?" element={<Company />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
