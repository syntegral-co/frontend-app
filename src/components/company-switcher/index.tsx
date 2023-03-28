import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ICompany } from '../../pages/companies/types'
import { companies } from '../../state/data'

function isCompanyInSearchTerm(company: ICompany, searchTerm: string): company is ICompany {
  return company.name.toLowerCase().includes(searchTerm.toLowerCase())
}

function CompanySwitcher() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <h1 className="text-5xl font-bold text-primary-content">Hi! 👋🏻</h1>
      <p className="py-6 text-primary-content">What would you like to explore today?</p>
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full max-w-xs text-primary-content"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm !== '' && (
        <ul className="menu w-full max-w-xs border border-base-200 bg-base-100 p-4 shadow-md">
          {companies
            .filter((company) => isCompanyInSearchTerm(company, searchTerm))
            .map((company: ICompany) => (
              <li key={company.id} className="text-primary-content hover:text-accent">
                <NavLink to={`/companies/${company.id}`}>{company.name}</NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default CompanySwitcher
