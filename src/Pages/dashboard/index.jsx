import * as C from './styles'

export const Dashboard = (props) => {

    return(
        <C.Container>
            <C.Text>Bem Vindo {props.name}</C.Text>
        </C.Container>
    )
}