import { Container } from '../../App.styles'
import * as C from './styles'


export const InputSenha = ({title, img, type}) => {

    return(
        <C.Container>
            <C.Input type={type} placeholder={title}></C.Input>
            <C.Img src={''}></C.Img>
        </C.Container>
    )
}