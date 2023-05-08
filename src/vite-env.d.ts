/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_AUTH0_DOMAIN: string
  readonly VITE_AUTH0_CLIENTID: string
  readonly VITE_CHATBOT_API_BASEPATH: string
  readonly VITE_DOC_API_BASEPATH: string
  readonly VITE_API_KEY: string
  readonly VITE_MIXPANEL_PROJECT_TOKEN: string
}
