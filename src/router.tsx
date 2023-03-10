import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/404'
import SignIn from './pages/signin'
import Dashboard from './pages'
import Demo from './pages/demo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <SignIn />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'demo',
        element: <Demo />,
      },
    ],
  },
])
