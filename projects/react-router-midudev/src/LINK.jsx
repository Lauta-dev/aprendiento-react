import { EVENT } from "./const"

export function navigator(href) {
  // Cambiar la URL sin refrescar la página actual
  window.history.pushState({}, '', href)

  // Crear un evento personalizado
  const navigatorEvent = new Event(EVENT.PUSHSTATE)

  // Lanzar el evento
  window.dispatchEvent(navigatorEvent)
}

export function Link({ target, to, ...props }) {
  function handelClick(event) {
    const isMainEvent = event.button === 0 // Boton izquiero (o derecho si lo tiene invertido) del mause (primary key)
    const IsModifiedEvent = event.metaKey
      || event.altKey
      || event.ctrlKey
      || event.shiftKey;

    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !IsModifiedEvent) {
      event.preventDefault()
      navigator(to)
    }
  }

  return <a
    onClick={handelClick}
    href={to}
    target={target}
    {...props}
  />
}
