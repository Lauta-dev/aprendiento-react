import React from "react"
import { createRoot } from 'react-dom/client'
import { App } from "./src/App"
import './simple.min.css'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
