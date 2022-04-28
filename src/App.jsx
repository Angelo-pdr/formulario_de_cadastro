import * as C from './App.styles'
import {InputSenha} from './components/InputSenha'
import {useState} from 'react'

function App() {

  const [img, setImg] = useState("../src/img/mostra.jpg")
  return (
    <C.Body>
      <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
          
            <InputSenha type="text" title= "Senha" img={img}/>
            <InputSenha type="email" title= "Senha" img={img}/>
            <InputSenha type="password" title= "Senha" img={img}/>
            <InputSenha type="password" title= "Confirmar senha" img={img}/>
            
          <input type="submit" value="Registrar-se" className='submit' />
      </C.Container>
    </C.Body>
  )
}

export default App
