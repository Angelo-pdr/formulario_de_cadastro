import {useState} from 'react';
import * as C from './styles';

export const InputUser = (props) => {

    const [userPassword, setUserPassword] = useState ('')
    const [userEmail, setUserEmail] = useState('')
    const [show, setShow] = useState( false)
    const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")

    const handleChangeType = () => {
        if(image == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
          setImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1652106701~hmac=f651817fff025a0ba070ee500a5bbeb6")
          setShow(true)
      
        }else{
          setImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
          setShow(false)
        }
    }  

    const handleUser = () => {
        if( userPassword.trim() !== '' && userEmail.trim() !== ''){
            props.validUser(userPassword, userEmail)
        }
    }

    return(
       <C.Container>
        <C.Area>
            <C.Input 
                types="email" 
                placeholder="Email"
                value={userEmail}
                onChange={event => setUserEmail(event.target.value)}
                onKeyUp={handleUser}
            ></C.Input>
        </C.Area>

        <C.Area>
            <C.Input 
            type={show ? "text" : "password"} 
            placeholder="Senha"
            value={userPassword}
            onChange={ event => setUserPassword(event.target.value)}
            onKeyUp={handleUser}></C.Input>
            
            <C.Img onClick={handleChangeType} src={image} alt="olhos"></C.Img>
        </C.Area>
       </C.Container>
    )
}