import { createRoot } from 'react-dom/client'
import React from 'react'
import { App } from './src/App'

import './index.css'

createRoot(document.getElementById('app')).render(
  <>
    <App />
  </>
)
