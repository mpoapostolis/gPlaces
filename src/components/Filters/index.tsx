import React from "react"

interface IProps {
  layoutClass: string
}

function Filters(props: IProps) {
  return (
    <div className={props.layoutClass}>
      <h1>Filters</h1>
    </div>
  )
}

export default Filters
