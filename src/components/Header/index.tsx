import React from "react"

interface IProps {
  layoutClass: string
}

function Header(props: IProps) {
  return (
    <header className={props.layoutClass}>
      <h1>Header</h1>
    </header>
  )
}

export default Header
