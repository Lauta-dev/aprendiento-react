import './css/header.css'

export function Header () {
  return (
    <header>
      <ul>
        <li> <a href='#'>
          <img id='logo' src='./src/componet/svg/jp.svg' alt='' />
        </a>
        </li>
        <div>
          <li id='recursos'> <a href='#'>Recursos</a> </li>
          <li id='github'> <a href='github.com'>Github</a> </li>
        </div>
      </ul>
    </header>
  )
}
