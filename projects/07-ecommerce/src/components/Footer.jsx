import React from "react"
import '../css/Footer.css'
import { useFilter } from "../hook/useFilter"
import { useCart } from "../hook/useCart"

export function Footer() {
  const { filters } = useFilter()
  const { cart } = useCart()
  return (
    <footer className="footer">
      <p>Hecho gracias a este
        <strong>
          <a target="_blank" href="https://youtu.be/B9tDYAZZxcE">curso</a>
        </strong>
      </p>
    </footer>
  )
}
