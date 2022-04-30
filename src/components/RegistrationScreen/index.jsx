import * as C from './styles'
import {InputPassword} from '../InputPassword'
import {InputUser} from '../InputUser'

export const RegistrationScreen = () => {

    const mostraTela =() => {
        
    }
    return(
        <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
          
            <InputUser  />
            <InputPassword />
            
          <input type="submit" value="Registrar-se" className='submit' onClick={mostraTela} />
      </C.Container>
    )
}