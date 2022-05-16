import {useState, useContext} from 'react';
import * as C from './styles';
import {AuthContext} from '../../contexts/Context'

export const InputUser = () => {

    const {user} = useContext(AuthContext)
    const [userPassword, setUserPassword] = useState ('')
    const [userEmail, setUserEmail] = useState('')
    const [show, setShow] = useState( false)
    const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")

    const handleChangeType = () => {
        if(image == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
          setImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1652742993~hmac=2e1f9a364cbb09afaf92d1374e1016c0")
          setShow(true)
      
        }else{
          setImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
          setShow(false)
        }
    }  

    const handleUser = () => {
        if( userPassword.trim() !== '' && userEmail.trim() !== ''){
            user.email = userEmail
            user.password = userPassword
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