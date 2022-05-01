import * as C from './styles'
import {InputPassword} from '../InputPassword'
import {InputUser} from '../InputUser'
import { useState } from 'react'

export const RegistrationScreen = () => {

    const [cadastro, setCadastro] = useState([])

    const mostraTela =(taskName, taskEmail, taskPassoword) => {
        const newCadastro = [...cadastro]
        if( taskname && email && passoword){
            newCadastro.push({
                name: taskName,
                email: taskEmail,
                passoword: taskPassoword
             })
        }
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