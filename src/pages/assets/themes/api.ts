import { callAPI } from '../../../utils/api'

export async function getThemeSummary(assetId: number, themeId: number) {
  const APIUrl = `${
    import.meta.env.VITE_IMPACT_API_BASEPATH
  }/theme_summary?asset_id=${assetId}&theme_id=${themeId}`
  const data = await callAPI(APIUrl, {
    type: 'theme_summary',
    assetId: assetId.toString(),
    themeId: themeId.toString(),
  })

  return data
}
