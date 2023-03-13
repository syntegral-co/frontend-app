import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/404'
import Dashboard from './pages/dashboard'
import Demo from './pages'
import ChatOutput from './components/chat-output'
import Nav from './components/nav'
import ProtectedRoute from './components/protected-route'

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <Demo />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <ChatOutput />,
          },
          { path: 'company/:company', element: <Nav /> },
          { path: 'company/:company/themes', element: <Nav /> },
          { path: 'company/:company/theme/:theme', element: <Nav /> },
        ],
      },
    ],
  },
])
