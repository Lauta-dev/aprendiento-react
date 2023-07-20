import { useFilter } from '../App'

export function Filters () {
  const { setFilters, filters } = useFilter()

  const handleChangePrice = (e) => {
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
            value={filters.minPrace}

            onChange={handleChangePrice}
          />
          <span>${filters.minPrace}</span>
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
