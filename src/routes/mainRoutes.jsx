import {useRoutes} from 'react-router-dom'
import {Home} from '../Pages/Home'
import {Register} from '../Pages/Register'
import {Dashboard} from '../Pages/dashboard'

export const MainRoutes = () =>{
    return useRoutes([
        {path: '/', element:<Home />},
        {path: '/cadastro', element:<Register />},
        {path: '/dashboard', element: <Dashboard />}
    ])
}