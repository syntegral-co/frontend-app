async function callAPI(endpoint: string) {
  console.log('endpoint: ', endpoint)
  try {
    const APIUrl = `${import.meta.env.VITE_API_BASEPATH}${endpoint}`
    console.log('APIUrl: ', APIUrl)

    const response = await fetch(APIUrl, {
      headers: {
        authorization: import.meta.env.VITE_API_KEY,
      },
    })

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('There was a SyntaxError', error)
    } else {
      console.log('There was an error', error)
    }
  }
}

export async function getDocuments(pageId: number, minutes: number) {
  const data = await callAPI(`get-url?page_id=${pageId}&minutes=${minutes}`)

  return [1, 2, 3]
}
