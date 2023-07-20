import { useState, createContext } from 'react'

// Crear el contexto
export const FiltersContext = createContext()

// Crear el Provider, que sera quien provea el contexto
export function FilterProvider ({ children }) {
  // A este punto los filtros no funcionan, se usa un useState para que los filtros cambien
  const [filters, setFilters] = useState({
    category: 'all',
    minPrace: 0
  })

  return (
    <FiltersContext.Provider value={{
      /* Aqui tiene el valor que tendra el contexto */
      /* Valores estaticos
      * category: 'all',
      * minPrace: 0
      */

      filters,
      setFilters

    }}>
      {children}
    </FiltersContext.Provider>
  )
}
