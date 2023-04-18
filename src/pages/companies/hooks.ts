import { useParams } from 'react-router-dom'
import { companies } from '../../utils/data'
import { Company } from './types'

export function useCurrentCompany() {
  const { company } = useParams()

  if (!company) return null

  return companies.find((c) => c.id === parseInt(company)) as Company
}
