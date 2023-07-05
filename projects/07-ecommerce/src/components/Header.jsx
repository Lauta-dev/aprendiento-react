import React from "react"
import { Filters } from "./Filters"

export function Header({ changeFilters }) {
  return (
    <header>
      <strong>React</strong>
      <h2>Shop!</h2>
      <Filters onChange={changeFilters} />
    </header>
  )
}
