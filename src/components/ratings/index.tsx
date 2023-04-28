interface RatingsProps {
  id: number | string
  rating: number
}

function Ratings({ id, rating }: RatingsProps) {
  let ratingsElements: JSX.Element[] = []

  for (let i = 0; i < rating; i++) {
    let checked = i + 1 >= rating

    ratingsElements.push(
      <input
        key={`rating-${id}-${i}`}
        type="radio"
        name={`rating-${id}`}
        className="mask mask-hexagon bg-accent"
        checked={checked}
        readOnly
      />,
    )
  }

  return <div className="rating rating-sm">{ratingsElements}</div>
}

export default Ratings
