import {useState} from 'react';
import * as C from './styles';

export const InputPassword= ({title, img, type, onPassword}) => {

    const [password, setPassword] = useState ('')
    const [confirmPassword,setConfirmPassword] = useState ('')

    const handlePassword = ( ) => {
        if((password.trim() === confirmPassword.trim()) 
         && (password.trim() != "" && confirmPassword.trim() != "")){
          onPassword(password)
        }
        
    }

    return(
      <C.Container>
          <C.Area>
            <C.Input 
            type={type} 
            placeholder={title}
            value={password}
            onChange={ event => setPassword(event.target.value)}
            onKeyUp={handlePassword}
            >

            </C.Input>
            <C.Img src={img} alt="olhos"></C.Img>
        </C.Area>

          <C.Area>
            <C.Input 
            type={type} 
            placeholder={title}
            value={confirmPassword}
            onChange={ event => setConfirmPassword(event.target.value)}
            onKeyUp={handlePassword}
            >

            </C.Input>
            <C.Img src={img} alt="olhos"></C.Img>
        </C.Area>
      </C.Container>
    )
}

