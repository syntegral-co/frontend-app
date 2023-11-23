import { useCurrentAsset } from '../assets/hooks'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Spinner from 'components/spinner'
import { Navigate } from 'react-router-dom'

function Download() {
  const currentAsset = useCurrentAsset()

  let pdf = null

  switch (currentAsset!.id) {
    case 19:
      pdf = import.meta.env.VITE_SWIGCO_PDF_REPORT
      break

    case 20:
      pdf = import.meta.env.VITE_FAKE_PDF_REPORT
      break

    case 27:
      pdf = import.meta.env.VITE_INERIA_PDF_REPORT
      break

    default:
      pdf = null
  }

  if (!currentAsset) return <Spinner context="asset" />

  if (!pdf) return <Navigate to="../" />

  return (
    <div className="flex min-h-screen w-full flex-col gap-4 text-center">
      <h1 className="font-maven text-2xl font-bold text-teal md:text-3xl">
        Download your report
      </h1>
      <p>Here is your report on {currentAsset!.name}</p>
      <object
        className="mx-auto mb-4 mt-2"
        data={pdf}
        type="application/pdf"
        width="80%"
        height="100%"
      >
        <p>
          Link <a href={pdf}>to the PDF!</a>
        </p>
      </object>
    </div>
  )
}

export default withAuthenticationRequired(Download, {
  onRedirecting: () => <Spinner context="user data" />,
})
