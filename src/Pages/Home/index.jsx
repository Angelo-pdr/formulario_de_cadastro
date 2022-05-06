import * as C from './styles'
import {InputUser} from '../../components/HomeComponents'

export const Home = () => {

    return(
        <C.Container>
            <C.HeaderText>Login</C.HeaderText>
            <InputUser />
            <input type="submit" value="loga" />
            <C.HeaderText>Login</C.HeaderText>
        </C.Container>
    )
}