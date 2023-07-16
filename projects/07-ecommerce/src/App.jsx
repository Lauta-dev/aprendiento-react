import { useEffect, useState } from 'react'
import { Product } from './Products.jsx'
import { products as inicialState } from './products.json'
import { Header } from './Header.jsx'
import { Filters } from './Filters.jsx'
import { Footer } from './Footer.jsx'

export function useFilters () {
  // Estado general para los filtros
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 20
  })
  // Filtrar los elementos
  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    })
  }

  return { filterProducts, setFilters, filters }
}

export function App () {
  const [products] = useState(inicialState)
  const { setFilters, filterProducts, filters } = useFilters()

  // Productos filtrados
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header>
        <Filters onCharge={setFilters} />
      </Header>
      <Product products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}
