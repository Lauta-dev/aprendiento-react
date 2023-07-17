import { useCatImage } from './hooks/useCatImage'
import { estilos } from './style/estilos'

export function Oto () {
  const { imageUrl } = useCatImage({ fact: 'hola' })

  return <img src={imageUrl} style={estilos} />
}
