import * as C from './styles'
import {InputUser} from '../../components/HomeComponents'
import {useState} from 'react'
import {} from '../../helper/mainFunction'

export const Home = () => {

   

    return(

        <C.Container>
            <C.HeaderText>Login</C.HeaderText>
            <InputUser />
            <input type="submit" value="loga" className='submit' onClick={validUser}/>
            <C.P><Link to="/cadastro" className='link'>Criar uma conta!</Link></C.P>
        </C.Container>

    )
}