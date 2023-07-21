import { useCart } from '../hook/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from '../icon'

function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <>
      <main className="products">
        <ul>
          {products.slice(0, 8).map(product => {
            const isProduct = checkProductCart(product)
            return <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button style={{ backgroundColor: isProduct ? 'red' : 'white' }} onClick={() => isProduct ? removeFromCart(product) : addToCart(product)}>
                  {
                    isProduct
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          })}
        </ul>
      </main>
    </>
  )
}

export default Products
