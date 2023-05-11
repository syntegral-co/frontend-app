import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { companiesState } from './atom'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'
import { Company } from '../../pages/companies/types'
import logo from '/assets/images/syntegral-white.png'

function isCompanyInSearchTerm(
  company: Company,
  searchTerm: string,
): company is Company {
  return company.name.toLowerCase().includes(searchTerm.toLowerCase())
}

function CompanySwitcher() {
  const [searchTerm, setSearchTerm] = useState('')
  const companies = useRecoilValue(companiesState)

  useEffect(() => {
    const sessionId = uuidv4()
    localStorage.removeItem('sessionId')
    localStorage.setItem('sessionId', sessionId)
  }, [])

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <img className="h-40" src={logo} />
      <h1 className="py-6 text-2xl font-bold text-primary-content">
        Choose a company to start exploring!
      </h1>
      <input
        type="text"
        placeholder="Type here"
        className="input-bordered input w-full max-w-xs text-primary-content"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm !== '' && (
        <ul className="menu w-full max-w-xs border border-base-200 bg-base-100 p-4 shadow-md">
          {companies
            .filter((company: Company) =>
              isCompanyInSearchTerm(company, searchTerm),
            )
            .map((company: Company) => (
              <li
                key={company.id}
                className="text-primary-content hover:text-accent"
              >
                <NavLink to={`/companies/${company.id}/themes`}>
                  {company.name}
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default CompanySwitcher
