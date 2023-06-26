import './css/input.css'
import { useState } from 'react'

export function Input() {
  const [anime, setAnime] = useState()

  return (
    <div className='conteiner_search'>
      <input
        className='input_search'
        type='text'
        placeholder='Search anime'
        onChange={(evet) => setAnime(evet.target.value)}
      />
      <button
        className='btn_search' onClick={() => {
          if (anime === undefined) return null
          console.log(anime)
        }}
      >Search
      </button>
    </div>

  )
}
