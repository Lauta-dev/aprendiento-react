import React from 'react'

import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import { products as inicialProducts } from '../mocks/products.json'
import { useFilter } from './hook/useFilter'
import { Cart } from './components/Card'
import { CartProvider } from './context/cart'

export function App() {
  const { filterProducst, setFilters } = useFilter()
  const filteredProducts = filterProducst(inicialProducts)

  return (
    <CartProvider>
      <Cart />
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}
