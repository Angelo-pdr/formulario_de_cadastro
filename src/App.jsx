import * as C from './App.styles'
import {useState} from 'react'
import {RegistrationScreen} from './components/RegistrationScreen'

const App = () => {

  return (
    <C.Body>
      <RegistrationScreen />
    </C.Body>
  )
}

export default App
