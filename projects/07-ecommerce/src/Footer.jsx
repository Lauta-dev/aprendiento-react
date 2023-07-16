import './Footer.css'

export function Footer ({ filters }) {
  /*
      <h4>Prueba técnica de React * -</h4>
      <span>@midudev</span>
      <h5>Shopping cart con useContext, useReducer & useId</h5>

   */

  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}
    </footer>
  )
}
