import { useLocation } from "../hook/useLocation"

export function Twitter() {
  const { param } = useLocation({ pathName: window.location.pathname })

  return (
    <>
      <h1>Hola</h1>
      <p>{`@${param}`}</p>
    </>
  )
}