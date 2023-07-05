
const API_KEY = 'cc88f037'
export async function searchMovies({ search }) {
  if (search == '') return null
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await res.json()

    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }))

  } catch (error) {
    throw new Error('Error al obtener la respuesta')
  }
}
