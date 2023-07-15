import { Filters } from './Filters.jsx'

export function Header ({ filter }) {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters onCharge={filter} />
    </header>
  )
}
