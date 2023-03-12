import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/404'
import Dashboard from './pages'
import Demo from './pages/demo'
import ChatOutput from './components/chat-output'
import Nav from './components/nav'
import ProtectedRoute from './components/protected-route'

export const router = createBrowserRouter([
  {
    path: '/',
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
        path: '/demo',
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
          { path: 'demo/company/:company', element: <Nav /> },
          { path: 'demo/company/:company/themes', element: <Nav /> },
          { path: 'demo/company/:company/theme/:theme', element: <Nav /> },
        ],
      },
    ],
  },
])
