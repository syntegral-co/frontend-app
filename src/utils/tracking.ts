import mixpanel from 'mixpanel-browser'

const isProduction = import.meta.env.MODE === 'production'
mixpanel.init(import.meta.env.VITE_MIXPANEL_PROJECT_TOKEN, {
  debug: isProduction,
})

const Mixpanel = {
  identify: (id: string) => {
    if (!isProduction) return
    mixpanel.identify(id)
  },
  track: (name: string, props: object) => {
    if (!isProduction) return
    mixpanel.track(name, props)
  },
  people: {
    set: (props: object) => {
      if (!isProduction) return
      mixpanel.people.set(props)
    },
  },
} as const

export default Mixpanel
