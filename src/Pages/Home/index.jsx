import * as C from './styles'
import {InputUser} from '../../components/HomeComponents'
import {useNavigate, Link} from 'react-router-dom'
import {useState} from 'react'

export const Home = () => {

    const navigate = useNavigate()
    const [userList, setUserList] = useState (JSON.parse(localStorage.getItem('user') || '[]'))

    const validUser = (taskPassword, taskEmail) =>{
        for(let index in userList){
            if(taskPassword == userList[index].password && taskEmail == userList[index].email){
               return navigate("/dashboard")
            }
        }
    }

    return(
        <C.Container>
            <C.HeaderText>Login</C.HeaderText>
            <InputUser validUser={validUser}/>
            <input type="submit" value="loga" className='submit' onClick={validUser}/>
            <C.P><Link to="/cadastro" className='link'>Criar uma conta!</Link></C.P>
        </C.Container>
    )
}