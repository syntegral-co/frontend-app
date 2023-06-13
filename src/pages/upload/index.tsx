import { withAuthenticationRequired } from '@auth0/auth0-react'
import { FileWithPath, useDropzone } from 'react-dropzone'
import classnames from 'classnames'
import Nav from '../../components/nav'
import Spinner from '../../components/spinner'

function Upload() {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragReject,
    isDragActive,
  } = useDropzone()

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <>
      <Nav />
      <div className="flex h-full flex-col gap-4">
        <div
          className={classnames(
            'flex h-96 w-full items-center justify-center rounded-md border-2 border-dashed border-primary-content',
            {
              'border-accent': isDragActive || isFocused,
              'borde-error': isDragReject,
            },
          )}
        >
          <div
            {...getRootProps({
              className:
                'flex items-center justify-center dropzone w-full h-full',
            })}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
        {files.length > 0 && (
          <div>
            <p>Uploaded files:</p>
            <ul className="list-disc">{files}</ul>
          </div>
        )}
      </div>
    </>
  )
}

export default withAuthenticationRequired(Upload, {
  onRedirecting: () => <Spinner />,
})
