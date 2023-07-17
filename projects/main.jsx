import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import './main.css'

const app = createRoot(document.getElementById('app'))
app.render(
  <>
    <App />
  </>
)
