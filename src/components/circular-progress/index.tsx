interface ICircularProgressProps {
  color: string
  percentage: number
  children: JSX.Element
}
function CircularProgress({
  color,
  percentage,
  children,
}: ICircularProgressProps): JSX.Element {
  const style = {
    '--value': percentage,
    '--size': '7rem',
    '--thickness': '1rem',
  } as React.CSSProperties

  let classes = 'bg-neutral radial-progress '

  switch (color) {
    case 'purpose':
      classes += 'text-purpose'
      break
    case 'people':
      classes += 'text-people'
      break
    case 'profit':
      classes += 'text-profit'
      break
    case 'planet':
    default:
      classes += 'text-planet'
      break
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export default CircularProgress
