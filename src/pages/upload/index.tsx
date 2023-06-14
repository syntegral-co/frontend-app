import { useCallback, useState } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import { delay } from '../../utils/helpers'
import classnames from 'classnames'
import Nav from '../../components/nav'
import Spinner from '../../components/spinner'

function Upload() {
  const [showLoader, setShowLoader] = useState(false)
  const [progress, setProgress] = useState(0)

  const onDrop = useCallback(async () => {
    setShowLoader(true)

    await delay(3000)

    setProgress(35)

    await delay(1000)

    setProgress(68)

    await delay(2000)

    setProgress(99)

    await delay(500)

    setProgress(100)

    await delay(500)

    setShowLoader(false)
    setProgress(0)
  }, [setShowLoader, delay, setProgress])

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: {
      'application/pdf': [],
      'text/csv': [],
    },
    onDrop,
  })

  const files = acceptedFiles.map((file: FileWithPath) => (
    <div
      className="flex h-32 w-32 flex-col items-center justify-center overflow-hidden truncate rounded-md border-2 border-accent px-4"
      key={file.path}
    >
      <p className="text-xs uppercase">{file.name}</p>
    </div>
  ))

  const progressStyle = {
    '--value': progress,
    '--size': '8rem',
    '--thickness': '1rem',
  } as React.CSSProperties

  return (
    <>
      <Nav />
      <div className="flex h-full flex-col gap-4">
        <div
          className={classnames(
            'relative flex h-96 w-full items-center justify-center rounded-md border-2 border-dashed border-primary-content',
            {
              'border-accent': isDragActive || isFocused,
              'borde-error': isDragReject,
            },
          )}
        >
          {showLoader ? (
            <div
              className="top-50 left-50 radial-progress absolute border-4 border-primary bg-accent text-primary-content transition-all ease-in-out"
              style={progressStyle}
            >
              {progress}%
            </div>
          ) : null}
          {showLoader ? null : (
            <div
              {...getRootProps({
                className:
                  'flex items-center justify-center dropzone w-full h-full',
              })}
            >
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
              div
            </div>
          )}
        </div>
        {files.length > 0 && (
          <div>
            <p>Uploaded files:</p>
            <div className="mt-2 flex flex-row items-center justify-start gap-4">
              {files}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default withAuthenticationRequired(Upload, {
  onRedirecting: () => <Spinner />,
})
