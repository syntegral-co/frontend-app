import { selector } from 'recoil'
import { getAssets } from '../../utils/api'
import { Asset } from './types'

export const assetsState = selector({
  key: 'assets',
  get: async () => {
    const response = await getAssets()

    if (!response.data) {
      return []
    }

    return response.data.map((asset: any) => ({
      id: asset[0],
      name: asset[1],
    })) as Asset[]
  },
})
