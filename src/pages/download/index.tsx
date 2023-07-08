import { useCurrentAsset } from '../assets/hooks'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Nav from '../../components/nav'
import Spinner from '../../components/spinner'

function Download() {
  const currentAsset = useCurrentAsset()
  const pdf = import.meta.env.VITE_SWIGCO_PDF_REPORT

  if (!currentAsset) return <Spinner />

  return (
    <>
      <Nav />
      <div className="flex h-full flex-col gap-4 text-center">
        <h1 className="text-3xl">Download your report</h1>
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
    </>
  )
}

export default withAuthenticationRequired(Download, {
  onRedirecting: () => <Spinner />,
})
