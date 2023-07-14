import { Suspense, lazy } from "react"

import { Home } from "./component/HomePage"
// Cuando se leer el script este arhivo (componente) se carga aunque-
// no se este utilizado, se le llama archivos estatios.
// import { AboutPage } from "./component/AboutPage"

// Archivos dinamicos.
// Le indicamos a React que este componente no lo tiene que cargar.
const AboutPage = lazy(() => import('./component/AboutPage.jsx'))
const ThReads = lazy(() => import('./component/ThReads'))

import { Router } from "./Router"
import { Route } from "./component/Route"
import { Link } from "./LINK"

const router = [
  {
    path: '/th/:useName',
    Component: ThReads
  },
]

const reads = [
  'midudev',
  'goku',
  'vegeta',
  'pelado',
  'wanda',
  'petea'
]

// Nombrar el evento personalizado
export function App() {
  // Hacer una pequeña navegacion entre paginas
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Router router={router}>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={AboutPage} />
          <Route path='/th/:useName' Component={ThReads} />
        </Router>
      </Suspense>

      <ul>
        {reads.map(e => (
          <li key={e}>
            <Link to={`/th/${e}`}>{e}</Link>
          </li>
        ))}
      </ul>

      <Link to='/'>Home</Link>

    </>
  )
}