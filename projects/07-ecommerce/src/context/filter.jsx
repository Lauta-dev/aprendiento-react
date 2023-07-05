import React, { createContext, useState } from "react";

// Crear el contexto
export const FilterContext = createContext()

// Crear el Provide, para proveer el contexto
export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })
  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FilterContext.Provider>
  )
}
