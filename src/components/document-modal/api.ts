import { callAPI, callBackendAPI } from '../../utils/api'

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

export async function getDocumentByURI(URI: string) {
  const APIUrl = `${import.meta.env.VITE_BACKEND_API}/document/doc_signed_url`
  const data = await callBackendAPI(
    APIUrl,
    {
      type: 'doc_url_from_uri',
      URI: URI,
    },
    JSON.stringify([URI]),
  )

  return data[URI]
}
