import * as C from './App.styles'
import {InputPassword} from './components/InputPassword'
import {useState} from 'react'
import {InputUser} from './components/InputUser'
function App() {

  
  const [type, setTypes] = useState ("password")

  return (
    <C.Body>
      <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
          
            <InputUser  />
            <InputPassword title="Senha" img={image} />
            
          <input type="submit" value="Registrar-se" className='submit' />
      </C.Container>
    </C.Body>
  )
}

export default App
