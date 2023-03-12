import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import NotFound from './pages/404'
import SignIn from './pages/signin'
import Dashboard from './pages'
import Demo from './pages/demo'
import ChatOutput from './components/chat-output'
import Nav from './components/nav'

export const router = createBrowserRouter([
  {
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
        path: '/',
        element: <Demo />,
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
