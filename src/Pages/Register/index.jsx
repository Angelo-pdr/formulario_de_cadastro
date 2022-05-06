import * as C from './styles'
import {InputPassword} from '../../components/InputPassword'
import {InputUser} from '../../components/InputUser'

export const Register = () => {
   return(
        <C.Container>
            <C.HeaderText>Registro</C.HeaderText>
            <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
                <InputUser /> 
                <InputPassword />
            <input type="submit" value="Registrar-se" className='submit' />
        </C.Container>
   )
}