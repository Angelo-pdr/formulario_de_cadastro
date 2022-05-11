import * as C from './styles'
import {InputUser} from '../../components/HomeComponents'
import {Link} from 'react-router-dom'

export const Home = () => {

    const validUser = (taskPassword, taskEmail) =>{

    }

    return(
        <C.Container>
            <C.HeaderText>Login</C.HeaderText>
            <InputUser validUser={validUser}/>
            <input type="submit" value="loga" className='submit'  onClick={validUser}/>
            <C.P><Link to="/cadastro" className='link'>Criar uma conta!</Link></C.P>
        </C.Container>
    )
}