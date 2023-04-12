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
      {/* <h1 className="text-5xl font-bold text-primary-content">Hi! 👋🏻</h1>
      <p className="py-6 text-primary-content">What would you like to explore today?</p> */}
      <form className="text-5xl text-primary-content">
        <label htmlFor="company">I would like to know how</label>
        <input
          type="text"
          name="company"
          placeholder="this company"
          className="border-b-2 border-dotted border-accent bg-transparent p-2 text-accent focus:outline-none"
          //onChange={(event) => setSearchTerm(event.target.value)}
        />
        {searchTerm !== '' && (
          <ul className="menu w-full border border-base-200 bg-base-100 p-4 shadow-md">
            {companies
              .filter((company) => isCompanyInSearchTerm(company, searchTerm))
              .map((company: ICompany) => (
                <li key={company.id} className="text-primary-content hover:text-accent">
                  {company.name}
                  {/* <NavLink to={`/companies/${company.id}`}>{company.name}</NavLink> */}
                </li>
              ))}
          </ul>
        )}
        <br />
        <label htmlFor="theme">behaves regarding</label>{' '}
        <input
          type="text"
          name="theme"
          placeholder="this area"
          className="max-w-xs border-b-2 border-dotted border-accent bg-transparent p-2 text-accent focus:outline-none"
        />
      </form>
    </div>
  )
}

export default CompanySwitcher
