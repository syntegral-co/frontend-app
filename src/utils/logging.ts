import { useEffect } from 'react'
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom'
import * as Sentry from '@sentry/react'

const isProduction = import.meta.env.MODE === 'production'

if (isProduction) {
  Sentry.init({
    dsn: 'https://3e0017611a2e469e9938a8a2af409c99@o4505498617708544.ingest.sentry.io/4505498620592128',
    release: '1.0.0',
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV6Instrumentation(
          useEffect,
          useLocation,
          useNavigationType,
          createRoutesFromChildren,
          matchRoutes,
        ),
      }),
    ],
    tracesSampleRate: 0.5,
  })
}
