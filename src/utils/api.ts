import UserSession from './session'
import Mixpanel from './tracking'

type AnalyticsOptions = {
  [key: string]: string
}

export async function callAPI(
  endpoint: string,
  analyticsOptions?: AnalyticsOptions,
) {
  try {
    const response = await fetch(endpoint, {
      headers: {
        authorization: import.meta.env.VITE_API_KEY,
        session: UserSession.get()!,
      },
    })

    const data = await response.json()

    if (analyticsOptions) {
      Mixpanel.track('API Call', analyticsOptions)
    }

    return data
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('There was a SyntaxError', error)
    } else {
      console.log('There was an error', error)
    }
  }
}
