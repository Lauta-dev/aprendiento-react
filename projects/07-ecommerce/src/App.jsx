import { useState } from 'react'
import { Product } from './Products.jsx'
import { products as inicialState } from './products.json'
import { Header } from './Header.jsx'

export function App () {
  const [products] = useState(inicialState)

  // Estado general para los filtros
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  // Filtrar los elementos
  const filterProducts = (products) => (
    products.filter(product => (
      product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
    ))
  )

  // Productos filtrados
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header filter={setFilters} />
      <Product products={filteredProducts} />
    </>
  )
}
