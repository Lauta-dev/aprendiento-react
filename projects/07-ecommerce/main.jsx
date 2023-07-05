import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './src/App'
import './style.css'
import { FilterProvider } from './src/context/filter'

ReactDOM.createRoot(document.getElementById('app')).render(
  <FilterProvider>
    <App />
  </FilterProvider>
)

