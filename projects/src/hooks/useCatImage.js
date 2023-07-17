import { useState, useEffect } from 'react'
const CAT_API_URL = (firstWord) => `https://cataas.com/c/s/${firstWord}?json=true`

export function useCatImage({ fact, btn }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ').slice(0, 3).join(' ')

    fetch(CAT_API_URL(firstWord))
      .then(response => response.json())
      .then(data => {
        const { url } = data
        const fullImageUrl = `https://cataas.com${url}`
        setImageUrl(fullImageUrl)
      })
      .catch(error => console.log(error))
  }, [fact, btn])

  return { imageUrl }
}
