import { RouteObject } from 'react-router-dom'
import Demo from 'pages/index'
import NotFound from 'pages/404'
import Asset from 'pages/assets'
import Themes from 'pages/assets/themes'
import Theme from 'pages/assets/themes/theme'
import Download from 'pages/download'
import AssetClassSwitcher from 'components/asset-class-switcher'
import AssetSwitcher from 'components/asset-switcher'
import NewsRadar from 'pages/assets/themes/news'
import UpdatedNewsRadar from 'pages/assets/themes/radar'
import Catalogue from 'pages/catalogue'

const childrenRoutes: RouteObject[] = [
  {
    index: true,
    element: <AssetClassSwitcher />,
  },
  {
    path: 'classes/:class',
    element: <AssetSwitcher />,
  },
  {
    path: 'classes/6/assets/:asset/themes/:theme',
    element: <NewsRadar />,
  },
  {
    path: 'classes/8/assets/:asset/themes/:theme',
    element: <UpdatedNewsRadar />,
  },
  {
    path: 'classes/:class/assets/:asset',
    element: <Asset />,
    children: [
      {
        path: 'themes',
        element: <Themes />,
      },
      {
        path: 'themes/:theme',
        element: <Theme />,
      },
      {
        path: 'download',
        element: <Download />,
      },
    ],
  },
]

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Demo />,
    children: childrenRoutes,
  },
  {
    path: '/swigco',
    element: <Demo />,
    children: childrenRoutes,
  },
  {
    path: '/ineria',
    element: <Demo />,
    children: childrenRoutes,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/catalogue',
    element: <Catalogue />,
  },
]
