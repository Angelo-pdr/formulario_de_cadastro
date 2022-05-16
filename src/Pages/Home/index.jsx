import * as C from './styles'
import {InputUser} from '../../components/HomeComponents'
import {useNavigate, Link} from 'react-router-dom'
import {AuthContext} from '../../contexts/Context'
import {useContext, useState} from 'react'

export const Home = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const userList = useState(JSON.parse(localStorage.getItem('user') || '[]'))

    const validUser = () =>{

        for(let index in userList){

            if(user.password == userList[index].password && user.email == userList[index].email){
                navigate("/dashboard")
                return
            }

        }

    }

    
    return(
        <C.Container>
            <C.HeaderText>Login</C.HeaderText>
            <InputUser />
            <input type="submit" value="loga" className='submit' onClick={validUser}/>
            <C.P><Link to="/cadastro" className='link'>Criar uma conta!</Link></C.P> 
        </C.Container>
    )
}