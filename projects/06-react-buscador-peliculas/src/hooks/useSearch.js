import { useEffect, useState, useRef } from "react"

export function useSearch() {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const isFirsInput = useRef(true)

  useEffect(() => {
    if (isFirsInput.current) {
      isFirsInput.current = query == ''
      return
    }

    if (query == '') {
      setError('El elemento no debe estar vacio')
      return
    }

    if (query.length < 4) {
      setError('La pelicula debe contener 4 o más caracteres')
      return
    }

    return setError(null)
  }, [query])
  return { error, setQuery, query }
}
