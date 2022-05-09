import {useContext, useState} from 'react';
import * as C from './styles';
import {AuthContext} from '../../../contexts/Context'

export const InputPassword= () => {


    const {user} = useContext(AuthContext)
    const [image, setImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")
    const [otherImage, setOtherImage] = useState("https://cdn-icons-png.flaticon.com/512/535/535193.png")
    const [password, setPassword] = useState ('')
    const [confirmPassword,setConfirmPassword] = useState ('')
    const [show, setShow] = useState( false)
    const [otherShow, setOtherShow] = useState(false)

    const handlePassword = ( ) => {
        if((password.trim() === confirmPassword.trim()) 
         && (password.trim() != "" && confirmPassword.trim() != "")){
          user.password = password
          setConfirmPassword('')
          setPassword('')
        }
    }

    const handleChangeType = () => {
      if(image == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
        setImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1652106701~hmac=f651817fff025a0ba070ee500a5bbeb6")
        setShow(true)
    
      }else{
        setImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
        setShow(false)
      }
    }

    const newType = () => {
      if(otherImage == "https://cdn-icons-png.flaticon.com/512/535/535193.png" ){
        setOtherImage("https://cdn-icons.flaticon.com/png/512/3178/premium/3178377.png?token=exp=1652106701~hmac=f651817fff025a0ba070ee500a5bbeb6")
        setOtherShow(true)
    
      }else{
        setOtherImage("https://cdn-icons-png.flaticon.com/512/535/535193.png")
        setOtherShow(false)
      }
    }

    return(
      <C.Container>
          <C.Area>
            <C.Input 
            type={show ? "text" : "password"} 
            placeholder="Senha"
            value={password}
            onChange={ event => setPassword(event.target.value)}
            onKeyUp={handlePassword}></C.Input>
            
            <C.Img onClick={handleChangeType} src={image} alt="olhos"></C.Img>
        </C.Area>

          <C.Area>
            <C.Input 
            type={otherShow ? "text" : "password"} 
            placeholder="Confirma senha"
            value={confirmPassword}
            onChange={ event => setConfirmPassword(event.target.value)}
            onKeyUp={handlePassword}></C.Input>

            <C.Img onClick={newType} src={otherImage} alt="olhos"></C.Img>
        </C.Area>
      </C.Container>
    )
}

