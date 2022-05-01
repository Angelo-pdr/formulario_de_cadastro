import * as C from './styles'
import {InputPassword} from '../InputPassword'
import {InputUser} from '../InputUser'
import { useState } from 'react'

export const RegistrationScreen = () => {
    
    const [cadastro, setCadastro] = useState([])

    const mostraTela =(taskname, email) => {
        const newCadastro = [...cadastro]
         newCadastro.push({
            name: taskname,
            newEmail: email
         })
        setCadastro(newCadastro)
        console.log(cadastro)
    }
    return(
        <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
          
            <InputUser mostraTela={mostraTela} />
            <InputPassword />
            
          <input type="submit" value="Registrar-se" className='submit' onClick={mostraTela} />
      </C.Container>
    )
}