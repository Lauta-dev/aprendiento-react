import { useCatImage } from './hooks/useCatImage'
import { estilos, mainEstilos } from './style/estilos'
import { useCatFact } from './hooks/useCatFact'
import { Oto } from './Oto'

const FACT_API_URL = 'https://catfact.ninja/fact'

// Crear un custom hook
// Para hacerlo hay que usar la palabra "use" al principio
// para que react sepa que es un custom hook.
// El custom hook lo movi a
/*
  ./hooks/useCatImage.js
*/

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main style={mainEstilos}>
      <button onClick={() => {
        refreshFact()
      }}
      >
        Cambiar gato
      </button>
      <h1>Kitty App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img
        style={estilos}
        src={imageUrl}
        alt={`Imagen extraida de la primera palabra de ${FACT_API_URL}`}
      // eslint-disable-next-line react/jsx-closing-bracket-location
      />}

      <Oto />
    </main>
  )
}
