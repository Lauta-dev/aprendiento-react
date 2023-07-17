import { useState, useEffect } from 'react'
import { factApi } from '../service/fact'

export function useCatFact () {
  const [fact, setFact] = useState()
  const refreshFact = () => {
    factApi().then(data => setFact(data))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
