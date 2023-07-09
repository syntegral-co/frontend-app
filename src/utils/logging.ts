import * as Sentry from '@sentry/react'

Sentry.init({
  dsn: 'https://3e0017611a2e469e9938a8a2af409c99@o4505498617708544.ingest.sentry.io/4505498620592128',
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', 'https:yourserver.io/api/'],
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
})
