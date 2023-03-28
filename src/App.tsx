import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/protected-route'
import Demo from './pages'
import CompanySwitcher from './components/company-switcher'
import Company from './pages/companies'
import ImpactAreas from './pages/areas'
import Dashboard from './pages/dashboard'
import NotFound from './pages/404'

function App() {
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
