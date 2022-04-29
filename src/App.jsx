import * as C from './App.styles'
import {InputSenha} from './components/InputSenha'
import {useState} from 'react'
import {InputUsuario} from './components/InputUsario'
function App() {

  const [img, setImg] = useState("../src/img/mostra.jpg")
  const [type, setTypes] = useState ("password")
  
  return (
    <C.Body>
      <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
          
            <InputUsuario type={"text"} title="Usuario"/>
            <InputUsuario type={"email"} title="E-mail"/>
            <InputSenha type={type} title="Senha" img={img}/>
            <InputSenha type={type} title="Confirmar senha" img={img}/>
            
          <input type="submit" value="Registrar-se" className='submit' />
      </C.Container>
    </C.Body>
  )
}

export default App
