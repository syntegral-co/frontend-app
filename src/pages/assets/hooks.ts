import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useRecoilValue } from 'recoil'
import { AssetsState } from '../../components/asset-switcher/atom'
import { Asset, UserRole } from './types'

export function useCurrentAsset() {
  const assets = useRecoilValue(AssetsState)
  const { asset } = useParams()

  if (!asset) return null

  return assets.find((c: Asset) => c.id === parseInt(asset)) as Asset
}

export function useUserRoles() {
  const { user } = useAuth0()

  if (!user) return [] as UserRole[]

  const userNameSpace = `${import.meta.env.VITE_APP_URL}/roles`
  const userRoles: UserRole[] = user[userNameSpace]

  return userRoles
}

export function useIsSysadminUser() {
  const userRoles = useUserRoles()

  return userRoles.includes('Sysadmin')
}

export function useIsSwigcoUser() {
  const userRoles = useUserRoles()

  return userRoles.includes('SwigCo')
}

export function useIsIneriaUser() {
  const userRoles = useUserRoles()

  return userRoles.includes('Ineria')
}
