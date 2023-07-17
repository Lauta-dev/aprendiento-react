const FACT_API_URL = 'https://catfact.ninja/fact'

export const factApi = async () => {
  const fetchAwait = await fetch(FACT_API_URL)
  const data = await fetchAwait.json()
  return data.fact
}
