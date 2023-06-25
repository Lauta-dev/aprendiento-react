import { JIKAN_API_ANIME_ADULT_CONTENT } from '../const'

export async function getAnime (anime) {
  try {
    const getData = await fetch(JIKAN_API_ANIME_ADULT_CONTENT(anime))
    const res = await getData.json()
    return res
  } catch (error) {
    throw new Error('Error al obtener la respuesta')
  }
}
