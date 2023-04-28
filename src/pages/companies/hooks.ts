import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { companiesState } from '../../components/company-switcher/atom'
import { Company } from './types'

export function useCurrentCompany() {
  const companies = useRecoilValue(companiesState)
  const { company } = useParams()

  if (!company) return null

  return companies.find((c: Company) => c.id === parseInt(company)) as Company
}
