// useId: crea un identificador unico
import { useState, useId } from 'react'

import './Filters.css'

export function Filters ({ onCharge }) {
  const [minPrace, setMinPrace] = useState(0)

  // sintaxis de useId
  // import {  useId } from 'react'

  const priceFilterId = useId()
  const categoryFilterId = useId()

  // -----

  const handelChangeMinPrace = (e) => {
    const value = e.target.value
    setMinPrace(value)
    onCharge(prevstate => {
      return { ...prevstate, minPrice: value }
    })
  }

  const handelChangeCategory = (e) => {
    onCharge(prevstate => {
      return { ...prevstate, category: e.target.value }
    })
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={priceFilterId}>Price</label>
        <input
          type='range'
          name='price'
          id={priceFilterId}
          min='0'
          max='1000'
          value={minPrace}
          onChange={handelChangeMinPrace}
        />
        <span>${minPrace}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select name='category' id={categoryFilterId} onChange={handelChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='home-decoration'>Home decoration</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
        </select>
      </div>
    </section>
  )
}
