import { useFilter } from '../App'

export function Footer () {
  const { filters } = useFilter()

  return (
    <footer className="footer">
      {JSON.stringify(filters)}
    </footer>
  )
}
