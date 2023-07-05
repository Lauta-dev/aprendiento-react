import { useEffect, useState } from "react";
import { API_SEARCH } from "./api";

export function useFetchingApi({ peliAEleccion }) {
  const [peli, setPeli] = useState()

  useEffect(() => {
    fetch(API_SEARCH(peliAEleccion))
      .then(e => e.json())
      .then(({ Search }) => setPeli(Search))
  }, [])


  return { peli }

}
