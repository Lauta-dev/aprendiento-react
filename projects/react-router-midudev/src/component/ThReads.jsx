import { useLocation } from "../hook/useLocation"

export default function ThReads() {
  const { param } = useLocation({ pathName: window.location.pathname })
  return (
    <>
      <h1>ThRead</h1>
      <p>@<strong>{param}</strong></p>
    </>
  )
}