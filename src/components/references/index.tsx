import { DocumentLink } from 'components/document-modal/types'
import { Link } from 'react-router-dom'

type ReferencesProps = {
  retrieval_type?: 'id' | 'uri'
  documents: DocumentLink[]
}

function References({ retrieval_type = 'id', documents }: ReferencesProps) {
  return documents.map((document, index) => (
    <li key={index}>
      <Link
        to={`?document_${retrieval_type}=${document.id}&document_page=${document.page}`}
      >
        📄{' '}
        <span className="italic text-secondary hover:underline">
          {document.name}
        </span>
      </Link>
    </li>
  ))
}

export default References
