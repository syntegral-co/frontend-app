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
    path: 'classes/6/assets/:asset/themes/:theme',
    element: <NewsRadar />,
  },
  {
    path: 'classes/:class/assets/:asset/download',
    element: <Download />,
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
]
