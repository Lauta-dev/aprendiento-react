import { useState } from 'react'

import './Filters.css'

export function Filters ({ filter }) {
  const [minPrace, setMinPrace] = useState(0)

  const handelChangeMinPrace = (e) => {
    const value = e.target.value
    setMinPrace(value)
    filter(prevState => ({
      ...prevState,
      minPrace: value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          name='price'
          id='price'
          min='0'
          max='1000'
          onChange={handelChangeMinPrace}
        />
       <span>${minPrace}</span>
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="home-decoration">Home decoration</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </section>
  )
}
