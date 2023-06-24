import { useState, useEffect } from 'react'
import { JIKAN_API_ANIME, tipos } from '../const'
import './css/randomAnime.css'

export function RandomAnime () {
  const [randomAnime, setRandomAnime] = useState()

  useEffect(() => {
    fetch(JIKAN_API_ANIME('berserk'))
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(response => {
        const { data } = response
        setRandomAnime(data)
      })
  }, [])

  return (
    <section>
      {
        randomAnime && randomAnime.map(e => {
          const { title, images, type } = e
          const malId = e.mal_id
          const { jpg, webp } = images

          const jpgImgesUrl = {
            image_url: jpg.image_url,
            small_image_url: jpg.small_image_url,
            large_image_url: jpg.large_image_url
          }

          const webpImgesUrl = {
            image_url: webp.image_url,
            small_image_url: webp.small_image_url,
            large_image_url: webp.large_image_url
          }

          const imagen = jpgImgesUrl.large_image_url

          return (
            <div key={malId} id='random_anime_conteiner'>
              <div>
                <img src={imagen} alt={tipos(type, title)} />
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
