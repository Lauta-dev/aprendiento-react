import { useEffect, useState } from 'react'
import { JIKAN_API_TOP_ANIME, tipos } from '../const'
import './css/topAnime.css'

export function TopAnimes ({ nARenderizar }) {
  const [topAnime, setTopAnime] = useState([])

  useEffect(() => {
    fetch(JIKAN_API_TOP_ANIME)
      .then(res => {
        if (!res.ok) throw new Error('Hubo un error obteniendo los datos de la api - archivo topAnime.jsx')
        return res.json()
      })
      .then(response => {
        const { data } = response
        setTopAnime(data)
      })
  }, [])

  const newArrayTopAnime = topAnime.slice(0, nARenderizar)

  return (
    <section id='top_anime_conteiner'>
      <h1>Tops animes</h1>
      {
        newArrayTopAnime && newArrayTopAnime.map((data) => {
          const { title, images, type, rating, score } = data
          const malId = data.mal_id
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

          const imagen = webpImgesUrl.large_image_url

          return (
            <div key={malId}>
              <a href='#'>
                <img src={imagen} alt={tipos(type, title)} />
              </a>
              <div>
                <strong>{title}</strong>
                <p> Score: {score} </p>
              </div>
            </div>
          )
        })
      }

      <button className='asd'>Mostrar más</button>
    </section>
  )
}
