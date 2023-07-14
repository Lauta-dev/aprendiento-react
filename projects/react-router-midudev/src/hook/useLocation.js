import { match } from "path-to-regexp";
import { useEffect, useRef } from "react";

export function useLocation({ pathName }) {
  const ref = useRef()

  // regex.
  const reg = /\/([^/]+)\//;
  const final = pathName.match(reg)[1]

  const pathParams = match(`/${final}/:userName`, { decode: decodeURIComponent })
  const param = pathParams(pathName).params.userName

  useEffect(() => {
    ref.current = document.title = param
  }, [])

  return { param }
}