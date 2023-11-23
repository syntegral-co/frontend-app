import { useCurrentCategory } from 'components/themes-categories/hooks'
import { CategoryNews } from './types'
import { Link } from 'react-router-dom'

function CategoriesNews() {
  const currentCategory = useCurrentCategory()

  if (!currentCategory!.newsData) return null

  const newsData: CategoryNews[] = JSON.parse(currentCategory!.newsData)

  const newsDataElements = newsData.map((news) => (
    <div
      key={news.id}
      className="opacit-90 collapse join-item collapse-arrow border-b-2 border-accent-focus"
    >
      <input type="radio" name="accordion-news" />
      <div className="collapse-title text-xl font-medium">{news.title}</div>
      <div className="collapse-content flex flex-row items-center justify-start gap-4">
        {news.img_url !== '' && (
          <figure>
            <img className="h-20 w-auto" src={news.img_url} alt={news.title} />
          </figure>
        )}
        <div className="flex w-full flex-col">
          <p>{news.description}</p>
          <Link
            to={news.url}
            target="_blank"
            className="btn btn-link justify-end"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  ))

  return (
    <div className="join join-vertical mt-4 bg-base-200">
      {newsDataElements}
    </div>
  )
}

export default CategoriesNews
