import { useEffect, useState } from 'react'
import './css/topAnime.css'
import { getTopAnime } from '../logic/getTopAnime'
import { Anime } from './anime'

export function TopAnimes() {
  const [topAnime, setTopAnime] = useState([])

  useEffect(() => {
    getTopAnime()
      .then(data => setTopAnime(data))
  }, [])

  return <Anime topAnime={topAnime} />
}
