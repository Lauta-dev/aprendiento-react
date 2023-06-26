import { useState } from 'react'

import { tipos } from '../const'
import { getGenrenAnime } from '../logic/getGenrenAnime'
import './css/animeID.css'
import { SelecteAnimeSynopsis } from './SelectedAnimeSynopsis'

export function Order({ data }) {
  const [c, setC] = useState(false)

  const {
    images,
    title,
    title_english,
    title_japanese,
    type,
    source,
    duration,
    rating,
    synopsis,
    score,
    genres
  } = data

  const { jpg, webp } = images
  const animeTitles = [
    {
      title,
      uuid: crypto.randomUUID()
    },
    {
      title: `${title_english ?? 'No se encontro'}`,
      uuid: crypto.randomUUID()
    },
    {
      title: `${title_japanese ?? 'No se encontro'}`,
      uuid: crypto.randomUUID()
    }
  ]

  return (
    <section>
      <div className='cover'>
        <img src={jpg.large_image_url} alt={tipos(type, title)} />
      </div>
      <section>
        <ul className={getGenrenAnime(genres)[0]}>
          <li> <h2>Anime titles:</h2> </li>
          {animeTitles.map(({ title, uuid }) => <li key={uuid}> {title} </li>)}
        </ul>

        <SelecteAnimeSynopsis genres={genres} synopsis={synopsis} />
      </section>
    </section>
  )
}
