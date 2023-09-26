import { useCallback } from 'react'
import { useCurrentAsset } from 'pages/assets/hooks'
import { useCurrentTheme } from 'pages/assets/themes/hooks'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

function ParticlesAnimation() {
  const currentAsset = useCurrentAsset()
  const currentTheme = useCurrentTheme()

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (currentAsset || currentTheme) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 125,
            enable: true,
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.1,
            },
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticlesAnimation
