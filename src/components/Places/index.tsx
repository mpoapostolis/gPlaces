import React from "react"
import { RouteComponentProps, navigate } from "@reach/router"
import { container } from "./css"
import { cx } from "emotion"
import Card from "../Card"

interface IProps extends RouteComponentProps {
  layoutClass: string
}
function Places(props: IProps) {
  const { layoutClass } = props
  // navigate
  return (
    <div className={cx(layoutClass, container)}>
      <Card />
    </div>
  )
}
export default Places
