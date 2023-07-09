import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { sentryVitePlugin } from '@sentry/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'syntegral',
      project: 'syntegral-frontend-app',
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],
})
