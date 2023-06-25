import { tipos } from '../const'
import './css/animeID.css'

export function Order({ data }) {
  const {
    images,
    title,
    title_english,
    title_japanese,
    type,
    source,
    duration,
    rating,
    synopsis,
    score,
    genres
  } = data

  const { jpg, webp } = images
  const animeTitles = [title, title_english, title_japanese]

  // regex - filtrar si una frase contiene la palabra 'hentai'
  const regex = /\bHentai\b/gi
  const resultado = genres[0].name.match(regex)

  let className = 'sfw_title_anime'

  if (resultado !== null) {
    className = resultado.join('')
  }

  else console.log('null')

  return (
    <section>
      <div className='id'>
        <img src={jpg.image_url} alt={tipos(type, title)} />
      </div>
      <section>
        <ul>
          <li> <h2>Anime titles:</h2> </li>
          {animeTitles.map(title => <li className={className} key={title}> {title} </li>)}
        </ul>
      </section>
    </section>
  )
}
