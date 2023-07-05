import { useContext, useState } from "react"
import { FilterContext, FilterProvider } from "../context/filter"

export function useFilter() {
  // const [filters, setFilters] = useState({
  // category: 'all',
  // minPrice: 0,
  // })

  const { filters, setFilters } = useContext(FilterContext)

  function filterProducst(p) {
    return p.filter(pr => {
      return (
        pr.price >= filters.minPrice && (
          filters.category == 'all' ||
          pr.category == filters.category
        ))
    })
  }

  return { filterProducst, setFilters, filters }
}

