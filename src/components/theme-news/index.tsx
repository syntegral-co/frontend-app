import { ThemeNewsReference } from 'pages/assets/themes/types'
import { Link } from 'react-router-dom'

type ThemeNewsProps = {
  news: ThemeNewsReference
}

function ThemeNews({ news }: ThemeNewsProps) {
  const image =
    news.img_url !== '' ? news.img_url : '/assets/images/syntegral.svg'

  return (
    <div className="bg-base-200 flex flex-col items-center justify-start gap-2 w-full p-4 rounded-md shadow-2xl text-center">
      <img
        className="w-40 max-w-md rounded-lg shadow-2xl mb-4"
        src={image}
        alt={news.title}
      />
      <h1 className="text-xl font-bold">{news.title}</h1>
      <p className="py-4">{news.description}</p>
      <Link className="btn btn-link" to={news.url} target="_blank">
        Read more
      </Link>
    </div>
  )
}

export default ThemeNews
