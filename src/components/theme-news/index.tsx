import { ThemeNewsReference } from 'pages/assets/themes/types'
import { Link } from 'react-router-dom'

type ThemeNewsProps = {
  news: ThemeNewsReference
}

function ThemeNews({ news }: ThemeNewsProps) {
  return (
    <div className="card w-full bg-base-200 text-primary-content lg:w-96">
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{news.title}</h2>
        <p>{news.description}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-link" to={news.url} target="_blank">
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThemeNews
