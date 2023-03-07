import Nav from './components/nav'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div>
            <Nav />
            <div className="container mx-auto max-w-7xl p-2 sm:p-6 lg:p-8">
                <Outlet />
            </div>
        </div>
    )
}

export default App
