import { AddToCartIcon } from '../icon'

function Products ({ products }) {
  return (
    <>
      <main className="products">
        <ul>
          {products.map(product => {
            return <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <div>
                <button>
                  <AddToCartIcon />
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
