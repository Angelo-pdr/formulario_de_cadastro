import {useState} from 'react';
import * as C from './styles';

export const InputSenha = ({title, img, type}) => {

    const [password, setPassword] = useState ('')
    const [confirmPassword,setConfirmPassword] = useState ('')

    const handleNewSenha = ( ) => {
        if((password.trim() === confirmPassword.trim)  )
    }

    return(
      <C.Container>
          <C.Area>
            <C.Input 
            type={type} 
            placeholder={title}
            value={password}
            onChange={ event => setSenha(event.target.value)}
            onKeyUp={handleNewSenha}
            >

            </C.Input>
            <C.Img src={img} alt="olhos"></C.Img>
        </C.Area>

          <C.Area>
            <C.Input 
            type={type} 
            placeholder={title}
            value={confirmPassword}
            onChange={ event => setSenha(event.target.value)}
            onKeyUp={handleNewSenha}
            >

            </C.Input>
            <C.Img src={img} alt="olhos"></C.Img>
        </C.Area>
      </C.Container>
    )
}

