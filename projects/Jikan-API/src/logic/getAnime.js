import { JIKAN_API_ANIME_ADULT_CONTENT } from '../const'

export async function getAnime(anime) {
  try {
    const getData = await fetch(JIKAN_API_ANIME_ADULT_CONTENT(anime))
    const res = await getData.json()
    const { data, pagination } = res
    return data.map(data => ({
      id: data.mal_id,
      url: data.url,
      image: {
        jpg: {
          imageUrl: data.images.jpg.image_url,
          smallImageUrl: data.images.jpg.small_image_url,
          largeImageUrl: data.images.jpg.large_image_url,
        },
        webp: {
          imageUrl: data.images.webp.image_url,
          smallImageUrl: data.images.webp.small_image_url,
          largeImageUrl: data.images.webp.large_image_url,
        }
      },
      approved: data.approved,
      title: [
        {
          type: "Default",
          title: "Dragon Ball"
        },
        {
          type: "Synonym",
          title: "Dragonball"
        },
        {
          type: "Synonym",
          title: "Dragon Ball Z"
        },
        {
          type: "Synonym",
          title: "Dragonball Z"
        },
        {
          type: "Japanese",
          title: "\u30c9\u30e9\u30b4\u30f3\u30dc\u30fc\u30eb"
        },
        {
          type: "English",
          title: "Dragon Ball"
        }
      ]
    }))
  } catch (error) {
    throw new Error('Error al obtener la respuesta')
  }
}
