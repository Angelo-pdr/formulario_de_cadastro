import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {AutoProvider} from '../src/contexts/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AutoProvider>
  </React.StrictMode>
)
