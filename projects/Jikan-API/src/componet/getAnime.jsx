import { useEffect, useState } from 'react'
import { getAnime } from '../logic/getAnime'
import { Anime } from './anime'

export function GetAnimes({ params }) {
  const { anime } = params
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    getAnime(anime)
      .then(({ data }) => setAnimeData(data))
  }, [anime])

  if (!animeData.length) console.log('0')

  return <Anime animeArray={animeData} nARenderizar={2} />
}
