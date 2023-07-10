import { selector } from 'recoil'
import { getAssetClasses } from './api'
import { AssetClass } from './types'

export const assetClassesState = selector({
  key: 'assetClasses',
  get: async () => {
    const response = await getAssetClasses()

    if (!response.data) {
      return []
    }

    return response.data.map((assetClass: any) => ({
      id: assetClass[0],
      name: assetClass[1],
    })) as AssetClass[]
  },
})
