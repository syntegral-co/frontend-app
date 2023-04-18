import { animated, useSpring } from '@react-spring/web'
import { THEMES_POSITIONS } from '../../utils/constants'
import { NavLink } from 'react-router-dom'
interface CircularProgressProps {
  color: string | number
  percentage: number
  children: JSX.Element
  size: string
  thickness: string
  subtheme: number | null
  link?: string
}
function CircularProgress({
  color,
  percentage,
  children,
  size,
  thickness,
  subtheme,
  link,
}: CircularProgressProps): JSX.Element {
  let classes = 'bg-neutral radial-progress transition-all z-10 '

  let style = {
    '--value': percentage,
    '--size': size,
    '--thickness': thickness,
    transition: 'transform 1s ease-in-out',
  } as React.CSSProperties

  if (subtheme !== null) {
    const { x, y } = THEMES_POSITIONS[subtheme]
    const springs = useSpring({
      from: { transform: 'translate(0,0)' },
      to: { transform: `translate(${x}%, ${y}%)` },
    })

    style.position = 'absolute'
    style.zIndex = 9
    Object.assign(style, springs)
  }

  switch (color) {
    case 1:
      classes += 'text-people'
      break
    case 2:
      classes += 'text-profit'
      break
    case 3:
      classes += 'text-planet'
      break
    case 'neutral':
      classes += 'text-secondary-content'
      break
    case 'negative':
      classes += 'text-error'
      break
    case 'positive':
    default:
      classes += 'text-success'
  }

  const content = (
    <animated.div className={classes} style={style}>
      {children}
    </animated.div>
  )

  if (link) {
    return <NavLink to={link}>{content}</NavLink>
  }

  return content
}

CircularProgress.defaultProps = {
  size: '7rem',
  thickness: '1rem',
  subtheme: null,
}

export default CircularProgress
