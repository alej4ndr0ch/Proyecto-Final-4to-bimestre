import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { StarWarsApp } from './components/StarWarsApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <StarWarsApp />
  </StrictMode>
)