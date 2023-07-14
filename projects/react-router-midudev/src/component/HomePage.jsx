import { Link } from "../LINK"

export function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={'/about'}>About</Link>
    </div>
  )
}