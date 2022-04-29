import {useState} from 'react';
import * as C from './styles';
import {} from '../../img'
export const InputPassword= ({title}) => {

  const [image, setImage] = useState("../src/img/mostra.jpg")
    const [password, setPassword] = useState ('')
    const [confirmPassword,setConfirmPassword] = useState ('')
    const [changeType, setChangeType] = useState( "password")

    const handlePassword = ( ) => {
        if((password.trim() === confirmPassword.trim()) 
         && (password.trim() != "" && confirmPassword.trim() != "")){
          console.log(password)
        }
        
    }

    return(
      <C.Container>
          <C.Area>
            <C.Input 
            type={changeType} 
            placeholder="Senha"
            value={password}
            onChange={ event => setPassword(event.target.value)}
            onKeyUp={handlePassword}
            >

            </C.Input>
            <C.Img src={image} alt="olhos"></C.Img>
        </C.Area>

          <C.Area>
            <C.Input 
            type={changeType} 
            placeholder="Confirma senha"
            value={confirmPassword}
            onChange={ event => setConfirmPassword(event.target.value)}
            onKeyUp={handlePassword}
            >

            </C.Input>
            <C.Img  src="../../img/mostra.jpg" alt="olhos"></C.Img>
        </C.Area>
      </C.Container>
    )
}

