import { useContext } from 'react'
import { products } from '../products.json'
import Products from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FiltersContext } from './context/filters'
import { Cart } from './components/carrito/Cart'
import { CartProvider } from './context/cart'

export function useFilter () {
  /*
  // Estados para los filtros
  const [filters, setFilters] = useState({
    category: 'all',
    minPrace: 0
  })
  */

  // usar el contexto
  const { filters, setFilters } = useContext(FiltersContext)
  // devuelve los valores del filtro asignado en FilterProvider
  // console.log(filters)

  const filtersProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrace &&
      (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  return { setFilters, filtersProducts, filters }
}

function App () {
  const { filtersProducts } = useFilter()

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filtersProducts(products)}/>
      <Footer />
    </CartProvider>
  )
}

export default App
