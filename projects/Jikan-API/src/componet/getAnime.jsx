import { useEffect, useState } from 'react'
import { getAnime } from '../logic/getAnime'

export function GetAnimes ({ params }) {
  const { anime } = params
  const [animeData, setAnimeData] = useState([])
  console.log(animeData)
}
