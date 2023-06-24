import { useState, useEffect } from 'react'
import { RandomAnime } from './componet/randomAnime'
import { JIKAN_API_ANIME } from './const'
import { Header } from './componet/header'
import { TopAnimes } from './componet/topAnime'

export function App () {
  // const [listaDeAnime, setListaDeAnime] = useState()
  // const [nomdeDeAnime, setNombreDeAnime] = useState()
  // const [valorDeInput, setValorDeInput] = useState()
  // const [eventoDelBoton, setEventoDelBoton] = useState(false)

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
      <TopAnimes nARenderizar={6} />
    </section>
  )
}
