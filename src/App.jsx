import * as C from './App.styles'

function App() {

  return (
    <C.Body>
      <C.Container>
        <C.HeaderText>Registro</C.HeaderText>
        <C.Paragrafo>Registre-se agora no <span className='servido'>seu servido</span></C.Paragrafo>
        
          <input type="text" placeholder='Usúario'/>
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Senha'/>
          <input type="password" placeholder='Confirmar senha'/>
          <input type="submit" value="Registrar-se" className='submit' />
      </C.Container>
    </C.Body>
  )
}

export default App
