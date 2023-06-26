import { Header } from './component/header'
import { TopAnimes } from './component/topAnime'

import { GetAnimes } from './component/getAnime'
import { GetAnimeForID } from './component/getAnimeForID'
import { Footer } from './component/footer'
import { Routers } from './Routers/router'
import { AnimeRandomArray } from './randomAnimeArray'
import { Input } from './component/Input'

export function App() {
  return (
    <section>
      <Header />
      <AnimeRandomArray />
      <Input />

      <Routers
        GetAnimeForID={GetAnimeForID}
        GetAnimes={GetAnimes}
        TopAnimes={TopAnimes}
      />
      <Footer />
    </section>
  )
}
