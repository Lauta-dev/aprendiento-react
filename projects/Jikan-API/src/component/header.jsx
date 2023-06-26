import { Link } from 'wouter'
import './css/header.css'
export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>
            <img id='logo' src='./src/component/svg/jp.svg' alt='Logo de la pagina web' />
          </Link>
        </li>
        <div>
          <li id='github'>
            <a href='github.com'>Anime directory</a>
          </li>
        </div>
      </ul>
    </header>
  )
}
