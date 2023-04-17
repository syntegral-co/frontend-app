import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { NavLink } from 'react-router-dom'
import { ICompany } from '../../pages/companies/types'
import { companies } from '../../utils/data'

function isCompanyInSearchTerm(
  company: ICompany,
  searchTerm: string,
): company is ICompany {
  return company.name.toLowerCase().includes(searchTerm.toLowerCase())
}

function CompanySwitcher() {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const sessionId = uuidv4()
    localStorage.removeItem('sessionId')
    localStorage.setItem('sessionId', sessionId)
  }, [])

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center self-center">
      <p className="py-6 text-5xl text-primary-content">Hi 👋🏻</p>
      <p className="py-6 text-2xl text-primary-content">
        Choose a company to start exploring!
      </p>
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
              <li
                key={company.id}
                className="text-primary-content hover:text-accent"
              >
                <NavLink to={`/companies/${company.id}`}>
                  {company.name}
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

// function CompanySwitcher() {
//   const themes = useThemes()
//   const navigate = useNavigate()
//   const [mode, setMode] = useState('single')
//   const [firstSearchTerm, setFirstSearchTerm] = useState('')
//   const [firstCompany, setFirstCompany] = useState<number | null>(null)
//   const [secondSearchTerm, setSecondSearchTerm] = useState('')
//   const [secondCompany, setSecondCompany] = useState('')
//   const [theme, setTheme] = useRecoilState(themeState)

//   const submitForm = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault()

//     const formData = new FormData(event.currentTarget)
//     const formObject = Object.fromEntries(formData.entries())

//     const parsedResults = companySwitcherSchema.safeParse(formObject)

//     if (!parsedResults.success) {
//       console.log('parsedResults: ', parsedResults.error.format())
//       return
//     }

//     navigate(`./companies/${firstCompany}`)
//   }

//   return (
//     <div className="flex h-96 w-full flex-col items-center justify-center self-center">
//       {/* <h1 className="text-5xl font-bold text-primary-content">Hi! 👋🏻</h1>
//       <p className="py-6 text-primary-content">What would you like to explore today?</p> */}
//       <form
//         className="px-8 text-5xl text-primary-content md:px-0"
//         onSubmit={submitForm}
//       >
//         <label htmlFor="mode">I would like to</label>
//         <select
//           name="mode"
//           className="border-b-2 border-dotted border-accent bg-transparent p-2 text-accent focus:outline-none"
//           value={mode}
//           onChange={(event) => setMode(event.target.value)}
//         >
//           <option value="single">know how</option>
//           <option value="double">compare how</option>
//         </select>
//         <br />
//         <input
//           type="text"
//           name="first_company"
//           placeholder="this company"
//           className="border-b-2 border-dotted border-accent bg-transparent p-2 text-accent focus:outline-none"
//           onChange={(event) => setFirstSearchTerm(event.target.value)}
//           value={firstSearchTerm}
//         />
//         {mode === 'double' && (
//           <>
//             <label htmlFor="second_company">and</label>
//             <input
//               type="text"
//               name="second_company"
//               placeholder="this company"
//               className="border-b-2 border-dotted border-accent bg-transparent p-2 text-accent focus:outline-none"
//               onChange={(event) => setSecondCompany(event.target.value)}
//             />
//           </>
//         )}
//         {firstSearchTerm !== '' && (
//           <ul className="menu w-full border border-base-200 bg-base-100 p-4 shadow-md">
//             {companies
//               .filter((company) =>
//                 isCompanyInSearchTerm(company, firstSearchTerm),
//               )
//               .map((company: ICompany) => (
//                 <li
//                   key={company.id}
//                   className="cursor-pointer text-primary-content hover:text-accent"
//                   onClick={() => {
//                     setFirstSearchTerm(company.name)
//                     setFirstCompany(company.id)
//                   }}
//                 >
//                   {company.name}
//                   {/* <NavLink to={`/companies/${company.id}`}>{company.name}</NavLink> */}
//                 </li>
//               ))}
//           </ul>
//         )}
//         <br />
//         <label htmlFor="theme">{`behave${
//           mode === 'single' ? 's' : ''
//         } regarding the`}</label>{' '}
//         <select
//           name="theme"
//           className="border-b-2 border-dotted border-accent bg-transparent p-2 text-accent focus:outline-none"
//           value={theme}
//           onChange={(event) => setTheme(event.target.value)}
//         >
//           {themes.map((theme) => (
//             <option key={theme.id} value={theme.id}>
//               {theme.name}
//             </option>
//           ))}
//         </select>
//         area
//         <div className="align-center mt-8 flex justify-center">
//           <input type="submit" className="btn-accent btn" value="Let's go" />
//         </div>
//       </form>
//     </div>
//   )
// }

export default CompanySwitcher
