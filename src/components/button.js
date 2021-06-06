import * as React from "react"
import "./button.css"

const activateLasers = () => console.log("hej")

const Button = () => (
  <button onClick={activateLasers} className="primary">
    Kliknij mnie
  </button>
)

export default Button
