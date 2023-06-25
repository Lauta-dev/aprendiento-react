import { useState, useEffect } from 'react'
import { RandomAnime } from './componet/randomAnime'
import { JIKAN_API_ANIME } from './const'
import { Header } from './componet/header'
import { TopAnimes } from './componet/topAnime'

import { Link, Route, useRoute } from 'wouter'
import { GetAnimes } from './componet/getAnime'

export function App() {
  // const [listaDeAnime, setListaDeAnime] = useState()
  // const [nomdeDeAnime, setNombreDeAnime] = useState()
  // const [valorDeInput, setValorDeInput] = useState()
  // const [eventoDelBoton, setEventoDelBoton] = useState(false)

  const [match, params] = useRoute('/anime/:anime')

  /*
  useEffect(() => {
    fetch(JIKAN_API_ANIME("dragon ball"))
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(response => {
        const { data } = response
        setListaDeAnime(data)
      })
  }, [eventoDelBoton])
  */

  return (
    <section>
      <Header />
      <ul>
        <li><Link to='/anime/selected/berserk'> Anime de Berserk </Link></li>
        <li><Link to='/anime/selected/dragon ball'> Anime de Dragon Ball </Link></li>
        <li><Link to='/anime/selected/oni chichi'> Anime de Oni ChiChi </Link></li>
      </ul>

      <Route path='/anime/top' component={TopAnimes} />
      <Route path='/anime/selected/:anime' component={GetAnimes} />
    </section>
  )
}
