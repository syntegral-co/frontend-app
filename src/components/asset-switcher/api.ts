import { callAPI } from '../../utils/api'

export async function getAssets() {
  const APIUrl = `${import.meta.env.VITE_IMPACT_API_BASEPATH}/asset`
  const data = await callAPI(APIUrl, {
    type: 'asset',
  })

  return data
}
