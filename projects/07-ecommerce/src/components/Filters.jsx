import React, { useState, useId } from "react"
import { useFilter } from "../hook/useFilter"

export function Filters() {
  const priceId = useId()
  const categoryId = useId()

  const { filters, setFilters } = useFilter()

  function handelRanger(e) {
    const value = e.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: value
    }))
  }

  function handelChangeCategory(e) {
    const value = e.target.value
    setFilters(prevState => ({
      ...prevState,
      category: value
    }))
  }

  return <main>
    <section>
      <div>
        <label htmlFor={priceId}><strong>Price</strong></label>
        <input
          type="range"
          name="price"
          id={priceId}
          min='0'
          max='1000'
          onChange={handelRanger}
          value={filters.minPrice}
        />
      </div>
      <strong>${filters.minPrice}</strong>
      <div>
        <label htmlFor={categoryId}>
          <strong>Category</strong>
        </label>
        <select onChange={handelChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  </main>
}
