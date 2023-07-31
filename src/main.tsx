import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from '@sentry/react'
import { Auth0Provider } from '@auth0/auth0-react'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Error from './components/error'
import App from './App'
import './utils/tracking'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENTID}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </RecoilRoot>
      </Auth0Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
