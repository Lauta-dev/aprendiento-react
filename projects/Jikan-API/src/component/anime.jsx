import { Link } from 'wouter'
import { tipos } from '../const'

export function Anime ({ animeArray, nARenderizar, section }) {
  const newArray = animeArray.slice(0, nARenderizar)

  return (
    <section id='top_anime_conteiner'>
      <h2> {section} </h2>
      {
        newArray && newArray.map((data) => {
          const { title, images, type, score } = data
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
          const tituloSinEspacios = title.split(' ').join('_')

          return (
            <div key={malId}>
              <Link to={`/anime/selected/one/${malId}`} className='a'>
                <img className='cover_small' src={imagen} alt={tipos(type, title)} />
                <div id='contenedor_info'>
                  <strong>{title}</strong>
                  <p> Score: {score} </p>
                  <p> ID: {malId} </p>
                </div>
              </Link>
            </div>
          )
        })
      }
    </section>
  )
}
