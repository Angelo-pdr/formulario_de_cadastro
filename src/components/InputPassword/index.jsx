import {useState} from 'react';
import * as C from './styles';

export const InputPassword= () => {

    const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")
    const [password, setPassword] = useState ('')
    const [confirmPassword,setConfirmPassword] = useState ('')
    const [changeType, setChangeType] = useState( "password")

    const handlePassword = ( ) => {
        if((password.trim() === confirmPassword.trim()) 
         && (password.trim() != "" && confirmPassword.trim() != "")){
          console.log(password)
        }
        
    }

    const handleChangeType = (e) => {
      if(image == "https://cdn-icons-png.flaticon.com/512/535/535193.png"){
        setImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1651272222~hmac=22e7fb213a609112bd676ec3a120b36f")
        setChangeType("text")
      }else{
        setImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
        setChangeType("password")
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
            <C.Img onClick={handleChangeType} src={image} alt="olhos"></C.Img>
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
            <C.Img onclick={ e =>handleChangeType(e.target.id)} src={image} alt="olhos"></C.Img>
        </C.Area>
      </C.Container>
    )
}

