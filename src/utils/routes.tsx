import { RouteObject } from 'react-router-dom'
import Demo from '../pages'
import AssetClassSwitcher from '../components/asset-class-switcher'
import AssetSwitcher from '../components/asset-switcher'
import NotFound from '../pages/404'
import Asset from '../pages/assets'
import Themes from '../pages/assets/themes'
import Theme from '../pages/assets/themes/theme'
import Download from '../pages/download'

export const routes: RouteObject[] = [
  {
    path: '/swigco?',
    element: <Demo />,
    children: [
      {
        index: true,
        element: <AssetClassSwitcher />,
      },
      {
        path: 'classes/:class',
        element: <AssetSwitcher />,
      },
      {
        path: 'classes/:class/assets/:asset',
        element: <Asset />,
      },
      {
        path: 'classes/:class/assets/:asset/themes',
        element: <Themes />,
      },
      {
        path: 'classes/:class/assets/:asset/themes/:theme',
        element: <Theme />,
      },
      {
        path: 'classes/:class/assets/:asset/download',
        element: <Download />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
