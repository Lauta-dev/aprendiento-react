import { Animes } from './Animes'

export function ListOfAnimes({ animeArray, nARenderizar, section }) {
  const newArray = animeArray.slice(0, nARenderizar)

  return (
    <section id='top_anime_conteiner'>
      <h2> {section} </h2>
      {
        newArray && newArray.map((data) => {
          const { title, images, type, score, genres } = data
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
            <Animes
              key={malId}
              imagen={imagen}
              malId={malId}
              title={title}
              score={score}
              type={type}
              genres={genres}
            />
          )
        })
      }
    </section>
  )
}
