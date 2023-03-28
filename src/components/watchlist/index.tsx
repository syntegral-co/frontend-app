const watched = [1, 6]
import { NavLink } from 'react-router-dom'
import { companies } from '../../state/data'

function Watchlist() {
  return (
    <div className="flex flex-row justify-start gap-2">
      {companies
        .filter((company) => watched.includes(company.id))
        .map((company) => (
          <NavLink key={company.id} to={`./companies/${company.id}`}>
            <div className="card image-full h-24 w-28 bg-base-100 shadow-xl transition-transform hover:scale-110">
              <figure>
                <img src={company.logo} alt={company.name} className="!h-16 !w-auto !object-contain p-2" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{company.name}</h2>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  )
}

export default Watchlist
