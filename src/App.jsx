import * as C from './App.styles'
import {InputPassword} from './components/InputPassword'
import {useState} from 'react'
import {InputUser} from './components/InputUser'
function App() {

  const [image, setImage] = useState("../src/img/mostra.jpg")
  const [type, setTypes] = useState ("password")
  const [register,setRegister] = useState ([])

  const saveRegister = (password) => {
    
    register.push({
      senha:password
    })
    console.log(register)
    setRegister(register)
  }

  return (
    <C.Body>
      <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
          
            <InputUser />
            <InputPassword type={type} title="Senha" img={image} onPassword={saveRegister}/>
            
          <input type="submit" value="Registrar-se" className='submit' />
      </C.Container>
    </C.Body>
  )
}

export default App
