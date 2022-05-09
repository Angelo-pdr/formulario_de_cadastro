import * as C from './styles'
import {InputPassword} from '../../components/RegistrationComponents/InputPassword'
import {InputUser} from '../../components/RegistrationComponents/InputUser'
import {AuthContext} from '../../contexts/Context'
import { useState, useContext } from 'react'

export const Register = () => {
    const {user} = useContext(AuthContext)
    const [userNew, setUserNew] = useState (JSON.parse(localStorage.getItem('user') || '[]'))

    const AddLocalStorage = () => {
        localStorage.setItem('user', JSON.stringify(list))
    }

   return(
        <C.Container>
            <C.HeaderText>Cadastra</C.HeaderText>
                <InputUser /> 
                <InputPassword />
            <input type="submit" value="Cadastre-se" className='submit' onClick={AddLocalStorage} />
        </C.Container>
   )
}