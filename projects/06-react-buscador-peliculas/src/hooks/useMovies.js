import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [responseMovies, setResponseMovies] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search == previousSearch.current) return
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const res = await searchMovies({ search })
        setResponseMovies(res)
      } catch (e) {
        setError(e.message)
      } finally {
        // Se ejecuta cuando la peticion es correcta como no
        setLoading(false)
      }
    }
  }, [])

  const sortMovies = useMemo(() => {
    return sort
      // Se crea una copia del array y se usa sort
      // mdn: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      ? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovies

  }, [sort, responseMovies])

  return { getMovies, responseMovies: sortMovies, loading, error }
}
