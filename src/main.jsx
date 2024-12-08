import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter  as Router } from 'react-router-dom'
import App from './App'



const root = createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>
)
