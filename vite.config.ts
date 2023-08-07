import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      sentryVitePlugin({
        org: 'syntegral',
        project: 'syntegral-frontend-app',
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        telemetry: false,
      }),
    ],
  }
})
