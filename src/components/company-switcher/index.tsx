import { useNavigate } from 'react-router-dom'
import { companies } from '../../state/data'

function CompanySwitcher() {
  const navigate = useNavigate()

  const chooseCompany = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/companies/${event.target.value}`)
  }
  return (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <h1 className='text-5xl font-bold'>Hi! 👋🏻</h1>
      <p className='py-6'>
        Choose a company from the list below and begin exploring!
      </p>
      <select
        className='select-bordered select select-lg w-full max-w-xs'
        onChange={chooseCompany}
      >
        {companies.map((company) => (
          <option
            key={company.id}
            value={company.id}
            // disabled={company.id !== 6}
          >
            {company.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CompanySwitcher
