import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Demo from './pages'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './components/protected-route'
import NotFound from './pages/404'
import Company from './pages/companies'
import Watchlist from './components/watchlist'

function App() {
  return (
    <div className='container mx-auto h-screen py-6'>
      <Nav />
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Demo />
              </ProtectedRoute>
            }
          >
            <Route index element={<Watchlist />} />
            <Route path='companies/:company' element={<Company />} />
            <Route
              path='companies/:company/themes/:theme?'
              element={<p>THEME</p>}
            />
          </Route>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
