import { useEffect, useState } from 'react'
import { getAnime } from '../logic/getAnime'
import { Anime } from './anime'

export function GetAnimes ({ params }) {
  const { anime } = params
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    getAnime(anime)
      .then(({ data }) => setAnimeData(data))
  }, [anime])

  if (!animeData.length) null

  return (
    <Anime
      animeArray={animeData}
      nARenderizar={5}
      section={`Anime sobre ${anime}`}
    />
  )
}
