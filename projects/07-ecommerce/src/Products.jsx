// Icono del carrito
import { AddToCartIcon } from './Icons.jsx'

// Css
import './Products.css'

// La prop resive un array
export function Product ({ products }) {
  return (
    <div className='products'>
      <ul>
        {
          products.slice(0, 10).map(products => (
            <li key={products.id}>
              <picture className='cover'>
                <img
                  src={products.thumbnail}
                  alt={products.title}
                />
              </picture>

              <div>
                <strong>
                  {products.title}
                </strong> - ${products.price}
              </div>

              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
