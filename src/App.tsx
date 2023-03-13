import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Demo from './pages'
import ChatOutput from './components/chat-output'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <div className='h-screen bg-gray-700'>
      <Nav />
      <div className='container mx-auto max-w-7xl p-2 sm:p-6 lg:p-8'>
        <Routes>
          <Route path='/' element={<Demo />}>
            <Route index element={<ChatOutput />} />
            <Route path='companies/:company' element={<p>COMPANY</p>} />
            <Route
              path='companies/:company/themes/:theme?'
              element={<p>THEME</p>}
            />
          </Route>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
