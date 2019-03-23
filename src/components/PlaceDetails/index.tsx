import React from "react"
import { cx } from "emotion"
import { detailContainer } from "./css"

interface IProps {
  layoutClass: string
  placeId?: string
}
function Details(props: IProps) {
  const { layoutClass } = props
  console.log(props.placeId)

  return (
    <div className={cx(layoutClass, detailContainer)}>
      <h1>{props.placeId}</h1>
    </div>
  )
}

export default Details
