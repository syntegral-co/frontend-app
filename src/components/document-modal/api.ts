import { callAPI } from '../../utils/api'

export async function getDocument(filenameId: string, minutes: number) {
  const APIUrl = `${
    import.meta.env.VITE_DOC_API_BASEPATH
  }/doc-url?filename_id=${filenameId}&minutes=${minutes}`
  const data = await callAPI(APIUrl, {
    type: 'doc_url',
    filenameId: filenameId,
  })

  return data
}
