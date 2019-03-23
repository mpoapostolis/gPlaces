import React from "react"
import { navigate } from "@reach/router"

interface IProps {
  layoutClass: string
}

function Header(props: IProps) {
  return (
    <header className={props.layoutClass}>
      <h1 onClick={() => navigate("/")}>Header</h1>
    </header>
  )
}

export default Header
