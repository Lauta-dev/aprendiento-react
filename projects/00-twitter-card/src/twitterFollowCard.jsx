import './twitterFollowCardStyle.css'
import { useState } from 'react'

/*
  clildren
    Con children usamos el valor que se le dio cuando llamamos el componenete

  Dar valor por defecto
    Cuando no le damos un valor al crear el elemeno, al ver el valor este por defecto dara undefine
    para tener un valor por defecto se debe hacer
    ({ userName = "undefine" }) => {}
*/
export function TwitterFollowCard ({ children = 'undefine', userName = 'undefine', arroba, inicialIsFollow }) {
  // Forma larga
  // const state = useState(false) // useState devuelve un array de 2 posiciones
  // const valueState = state[0];  // <- La primera posicion es el valor de estado
  // const updateStae = state[1];  // <- El segundo es una funcion que actualiza el estado

  // Usando delectructuracion de los arrays
  const [isFollowing, setIsFollowing] = useState(inicialIsFollow)

  // Se crea una funcion para cambiar el estado
  const handleclick = () => {
    setIsFollowing(!isFollowing)
  }

  const userNameAvatar = `https://unavatar.io/${userName}`
  const seguir = isFollowing ? 'Siguiendo' : 'No siguiendo'
  const estiloSeguir = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={userNameAvatar}
          alt='Avatar de midudev'
        />
        <div className='tw-followCard-info'>
          {/* Aqui se usa children */}
          <strong>{children}</strong>
          {/* Aqui se usa la funcion que agreagr el arroba (@) */}
          <span className='tw-followCard-infoUserName'>{arroba(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={estiloSeguir} onClick={handleclick}>
          {isFollowing ? 'Dejar de seguir' : 'Seguir'}
        </button>
      </aside>
    </article>
  )
}
