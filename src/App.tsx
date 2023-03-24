import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Demo from './pages'
import Dashboard from './pages/dashboard'
import ProtectedRoute from './components/protected-route'
import NotFound from './pages/404'
import Company from './pages/companies'
import CompanySwitcher from './components/company-switcher'
import { getDocuments } from './utils/api'

const PAGE_ID = 123
const MINUTES = 5

function App() {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['getDocuments', PAGE_ID, MINUTES],
    queryFn: ({ queryKey }) => getDocuments(PAGE_ID, MINUTES),
    onSuccess: (data) => {
      console.log('data: ', data)
      //queryClient.invalidateQueries(['getDocuments'])
    },
    onError: (error) => {
      console.log('error: ', error)
    },
    onSettled: (t) => console.log(t),
    retry: 2,
  })

  console.log('query: ', query.data)

  return (
    <div className='container mx-auto mt-4 h-screen py-6'>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Demo />
            </ProtectedRoute>
          }
        >
          <Route index element={<CompanySwitcher />} />
          <Route path='companies/:company' element={<Company />} />
          <Route
            path='companies/:company/themes/:theme?'
            element={<Company />}
          />
        </Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
