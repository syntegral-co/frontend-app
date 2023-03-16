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
    '--size': '10rem',
  } as React.CSSProperties

  let classes = 'bg-neutral radial-progress '

  switch (color) {
    case 'secondary':
      classes += 'text-secondary'
      break
    case 'accent':
      classes += 'text-accent'
      break
    case 'error':
      classes += 'text-error'
      break
    case 'primary':
    default:
      classes += 'text-primary'
      break
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export default CircularProgress
