import { useEffect, useState } from 'react'
import { getAnimeForID } from '../logic/getAnimeForID'
import { Order } from './Order'

export function GetAnimeForID({ params }) {
  const { malId } = params
  const [animeID, setAnimeID] = useState(null)

  useEffect(() => {
    getAnimeForID(malId)
      .then(data => {
        return setAnimeID(data.data)
      })
  }, [])

  return (
    <>
      {animeID && <Order data={animeID} />}
    </>
  )
}
