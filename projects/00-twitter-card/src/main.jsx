import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import "./base.css"

const app = ReactDOM.createRoot(document.getElementById('root'))
app.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)

