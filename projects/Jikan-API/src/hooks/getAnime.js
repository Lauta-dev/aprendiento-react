import { useState, useEffect } from 'react'
import { getAnime } from '../logic/getAnime'

export function useGetAnime({ params }) {
  const { anime } = params
  const [animeData, setAnimeData] = useState([])

  getAnime('dragon').then(e => console.log(e))

  useEffect(() => {
    getAnime(anime)
      .then(({ data }) => setAnimeData(data))
  }, [anime])

  return { animeData }
}
