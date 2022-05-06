import * as C from './styles'
import {InputUser} from '../../components/HomeComponents'
import {Link} from 'react-router-dom'

export const Home = () => {

    return(
        <C.Container>
            <C.HeaderText>Login</C.HeaderText>
            <InputUser />
            <input type="submit" value="loga" className='submit' />
            <C.P><Link to="/cadastro" className='link'>Criar uma conta!</Link></C.P>
        </C.Container>
    )
}