import * as C from './styles'
import {InputPassword} from '../../components/RegistrationComponents/InputPassword'
import {InputUser} from '../../components/RegistrationComponents/InputUser'


export const Register = () => {

   return(
        <C.Container>
            <C.HeaderText>Cadastra</C.HeaderText>
                <InputUser /> 
                <InputPassword />
            <input type="submit" value="Cadastre-se" className='submit' />
        </C.Container>
   )
}