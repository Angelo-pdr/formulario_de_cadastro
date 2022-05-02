import * as C from './styles'
import {InputPassword} from '../InputPassword'
import {InputUser} from '../InputUser'
import { useState } from 'react'

export const RegistrationScreen = () => {

    return(
        <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
            <InputUser /> 
          <input type="submit" value="Registrar-se" className='submit' />
      </C.Container>
    )
}