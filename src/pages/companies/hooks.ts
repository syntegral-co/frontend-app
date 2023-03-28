import { useParams } from 'react-router-dom'
import { companies } from '../../state/data'
import { ICompany } from './types'

export function useCurrentCompany() {
  const { company } = useParams()

  if (!company) return null

  return companies.find((c) => c.id === parseInt(company)) as ICompany
}
