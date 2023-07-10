import { callAPI } from '../../utils/api'

export async function getAssetClasses() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/asset_class`
  const data = await callAPI(APIUrl, {
    type: 'asset_class',
  })

  return data
}
