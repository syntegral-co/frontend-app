import IcoMoon, { IconProps } from 'react-icomoon'
import iconSet from '../../utils/icons.json'

function Icon(props: IconProps) {
  return <IcoMoon iconSet={iconSet} {...props} />
}

export default Icon
