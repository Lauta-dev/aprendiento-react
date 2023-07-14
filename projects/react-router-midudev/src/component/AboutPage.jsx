import { Link } from "../LINK"

export default function AboutPage(props) {
  console.log(props)
  window.document.title = 'Jolyne'
  return (
    <div>
      <h1>About Jolyne</h1>
      <Link to={'/'} >Home</Link>
      <br />
      <img src="https://cdn.myanimelist.net/images/characters/12/305223.jpg" />
    </div>
  )
}