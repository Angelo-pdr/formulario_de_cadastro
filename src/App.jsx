import * as C from './App.styles'
import {useState} from 'react'
import {MainRoutes} from './routes/mainRoutes'

const App = () => {

  return (
    <C.Body>
      <MainRoutes/>
    </C.Body>
  )
}

export default App
