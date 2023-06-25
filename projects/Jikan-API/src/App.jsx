import { Header } from './component/header'
import { TopAnimes } from './component/topAnime'

import { Link, Route } from 'wouter'
import { GetAnimes } from './component/getAnime'
import { GetAnimeForID } from './component/getAnimeForID'

export function App() {
  return (
    <section>
      <Header />
      <ul>
        <li><Link to='/anime/selected/berserk'> Anime de Berserk </Link></li>
        <li><Link to='/anime/selected/dragon ball'> Anime de Dragon Ball </Link></li>
        <li><Link to='/anime/selected/oni chichi'> Anime de Oni ChiChi </Link></li>
        <li><Link to='/anime/selected/toshi den'> Anime de Tochi </Link></li>
        <li><Link to='/anime/top'> Anime top </Link></li>
        <li><Link to='/'> Inicio </Link></li>
      </ul>

      <Route path='/anime/top' component={TopAnimes} />
      <Route path='/anime/selected/:anime' component={GetAnimes} />
      <Route path='/anime/selected/one/:malId' component={GetAnimeForID} />
    </section>
  )
}
