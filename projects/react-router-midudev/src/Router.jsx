import { match } from "path-to-regexp"
import { Page404 } from "./component/Page404"
import { EVENT } from "./const"
import { useEffect, useState, Children } from "react"
import { getCurrentPath } from "./utils"

export function Router({ children, router = [], defaultComponent: DefaultComponen = Page404 }) {
  // Devolvera la url donde estemos llamando a este estado
  const [currentPath, setCurrentPath] = useState(getCurrentPath())


  const routeFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name == 'Route'

    return isRoute ? props : null
  })

  const routerToUse = router.concat(routeFromChildren).filter(Boolean)

  useEffect(() => {
    function onLocalChange() {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENT.PUSHSTATE, onLocalChange)

    // Por defecto ir hacia otras con la
    // flechitas en el navegaro,
    //recargara la URL pero no la página
    window.addEventListener(EVENT.POPSTATE, onLocalChange)

    return () => {
      window.removeEventListener(EVENT.PUSHSTATE, onLocalChange)
      window.removeEventListener(EVENT.POPSTATE, onLocalChange)
    }

  }, [])

  const Page = routerToUse.find(({ path }) => {
    if (path == currentPath) return true;

    let routerParams = {}

    const matcherURL = match(path, { decode: decodeURIComponent })
    const matched = matcherURL(currentPath)
    if (!matched) return false;

    routerParams = matched.params
    return true

  })?.Component

  return Page ? <Page /> : <DefaultComponen />
}