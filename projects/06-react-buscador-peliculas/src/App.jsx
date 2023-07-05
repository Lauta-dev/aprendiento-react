/* useRef
Crea una referencia de un valor que se pueda mutar,
que se mantiene por el resto de vida del componente

# Util para guardar elementos que van a mutar

* id
* contador

A diferencia del `useEffect`, este no renderiza
de buelta  el componente

(useRef)[https://es.react.dev/reference/react/useRef]

sintax:
const nombreVariable = useRef('valor inicial')
*/
import React, { useRef, useState } from "react"
import { Movies } from "./components/ListOfMovies"
import { useMovies } from "./hooks/useMovies"
import { useSearch } from "./hooks/useSearch"

export function App() {
  const inputRef = useRef()

  // Estado que sirve para ordenar las peliculas
  const [sort, setSort] = useState(false)

  // Este estado es para la forma controlada de un formulario
  const { error, setQuery, query } = useSearch()
  const { responseMovies, getMovies, loading, } = useMovies({ search: query, sort })

  const handelSubmit = (e) => {
    e.preventDefault()
    // El current es un objeto que contiene
    // los metodos del input (o cualquier elemento HTML)
    // Algo que descubri es que el current salta al ultima referencia
    // const value = inputRef.current
    // console.log(value)

    // Forma descontrolada para obtener los datos
    // de un formulario
    const finds = new window.FormData(e.target)
    const movie = finds.get('movie')
    getMovies({ search: query })
  }

  // Cambiar el valor del estado sort
  const handelSort = () => {
    setSort(!sort)
  }

  const handelChange = (e) => {
    const value = e.target.value
    setQuery(value)
    // Validar formulario
    // de forma descontrolada
    // if (value.startsWith(' ')) {
    //   setError('No puede empezar por un espacio')
    //   return
    // } if (value == '') {
    //   setError('El elemento no debe estar vacio')
    //   return
    // } if (value.length < 4) {
    //   setError('La pelicula debe contener 4 o más caracteres')
    //   return
    // }
    // return setError(null)
  }

  return (
    <section>
      <header>
        <form
          autoComplete="off"
          onSubmit={handelSubmit}
          className="form">
          <label htmlFor="movie">
            <input
              required
              value={query}
              onChange={handelChange}
              ref={inputRef}
              type="text"
              name="movie"
              placeholder="Sonic, Dragon Ball..."
            />
            <input
              onChange={handelSort}
              checked={sort}
              type="checkbox"
              name="checkbox"
            />
            {<p style={error && {
              border: '2px solid red',
              padding: '5px'
            }}>{error}</p>}
          </label>
          <button ref={inputRef} type="submit">Search</button>
        </form>
      </header>
      <main>
        {loading ? <p>Cargando pelis</p> : <Movies movies={responseMovies} />}
      </main>
    </section >
  )
}
