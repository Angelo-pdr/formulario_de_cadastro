import * as C from './styles'
import {InputPassword} from '../../components/RegistrationComponents/InputPassword'
import {InputUser} from '../../components/RegistrationComponents/InputUser'
import {AuthContext} from '../../contexts/Context'
import { useState, useContext } from 'react'

export const Register = () => {
    const {user} = useContext(AuthContext)
    const [userNew, setUserNew] = useState (JSON.parse(localStorage.getItem('userNew') || '[]'))

    const AddLocalStorage = () => {
        localStorage.setItem('user', JSON.stringify(user))
    }

    const userList = ( ) =>{
        let newList = [...userNew]
        newList.push({
            id: userNew.length + 1,
            name: user.name,
            email: user.email,
            password: user.password
        })
        setUserNew(newList)
        AddLocalStorage()
    }

   return(
        <C.Container>
            <C.HeaderText>Cadastra</C.HeaderText>
                <InputUser /> 
                <InputPassword />
            <input type="submit" value="Cadastre-se" className='submit' onClick={userList} />
        </C.Container>
   )
}