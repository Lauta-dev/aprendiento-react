import { useState } from 'react'
import { TwitterFollowCard } from './twitterFollowCard'

const guerreroZTierra = [
  {
    name: 'goku',
    isFollowing: true
  },
  {
    name: 'vegeta',
    isFollowing: false
  },
  {
    name: 'gohan (arco de cell)',
    isFollowing: false
  },
  {
    name: 'muten roshi',
    isFollowing: true
  },
  {
    name: 'bulma',
    isFollowing: false
  },
  {
    name: 'krillin',
    isFollowing: true
  },
  {
    name: 'N 18',
    isFollowing: true
  },
  {
    name: 'N 17',
    isFollowing: false
  }
]
// const [ guerreroZ, setGuerreroZ] = useState("gohan")
// const [ isFollowing, setIsFollowing ] = useState(true)
// console.log(isFollowing)

// // console.log(guerreroZ)

// Pasar props mediante una funcion
const addAt = (userName) => `@${userName}`

// const lautaro = {
//   isFollow: true,
//   userName: "Naruto"
// }

export const App = () => (
  guerreroZTierra.map(({ name, isFollowing }) => (
    <TwitterFollowCard arroba={addAt} userName={name} inicialIsFollow={isFollowing} key={name}>
      {name}
    </TwitterFollowCard>
  )
  )
)

/*
return (
    <article className="App">
      {/* Renderizar un componente usando el operador rest {...lautaro}
          Por temas de optimizasion de se debe usar}
      {/* <TwitterFollowCard arroba={addAt} {...lautaro}>
        {/* Esto se le llamaria children}
        Naruto
      </TwitterFollowCard> }

      { ---- }
      <TwitterFollowCard arroba={addAt} userName="goku" inicialIsFollow={isFollowing}>
        Goku
      </TwitterFollowCard>

      <button onClick={() => setIsFollowing(!isFollowing)}> easd</button>

      {----/}

      { <TwitterFollowCard arroba={addAt} userName="vegeta">
        Vegeta
      </TwitterFollowCard>

      {/* // Cambiar el username usando useState }
      <TwitterFollowCard arroba={addAt} userName={guerreroZ}></TwitterFollowCard>
      <button onClick={() => setGuerreroZ("Pan")}>
        Cambiar guerreroZ
      </button> }
    </article>
  )
*/
