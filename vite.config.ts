import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import path from 'path'

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
    resolve: {
      alias: {
        assets: path.resolve(__dirname, '/assets'),
        utils: path.resolve(__dirname, './src/utils'),
        components: path.resolve(__dirname, './src/components'),
        pages: path.resolve(__dirname, './src/pages'),
      },
    },
  }
})
