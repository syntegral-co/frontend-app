import { selector } from 'recoil'
import { getAssets } from './api'
import { Asset } from '../../pages/assets/types'

export const AssetsState = selector({
  key: 'assets',
  get: async () => {
    const response = await getAssets()

    if (!response.data) {
      return []
    }

    return response.data.map((asset: any) => ({
      id: asset[0],
      assetClassId: asset[1],
      name: asset[2],
    })) as Asset[]
  },
})
