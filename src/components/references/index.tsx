import { DocumentLink } from 'components/document-modal/types'
import { Link } from 'react-router-dom'

type ReferencesProps = {
  documents: DocumentLink[]
}

function References({ documents }: ReferencesProps) {
  return documents.map((document, index) => (
    <li key={index}>
      <Link to={`?document_id=${document.id}&document_page=${document.page}`}>
        📄{' '}
        <span className="italic text-secondary hover:underline">
          {document.name}
        </span>
      </Link>
    </li>
  ))
}

export default References
