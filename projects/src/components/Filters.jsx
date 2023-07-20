import { useState } from 'react'
import { useFilter } from '../App'

export function Filters () {
  const [minPrace, setMinPrace] = useState(0)

  const { setFilters } = useFilter()

  const handleChangePrice = (e) => {
    setMinPrace(e.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrace: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor="price">
            Price
          </label>
          <input
            type="range"
            name="price"
            id="price"

            min='0'
            max='1000'

            onChange={handleChangePrice}
          />
          <span>${minPrace}</span>
        </div>

        <div>
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            onChange={handleChangeCategory}>
            <option value="all">All</option>
            <option value="laptops">Laptops</option>
            <option value="skincare">Skincare</option>
          </select>
        </div>
      </section>
    </>
  )
}
