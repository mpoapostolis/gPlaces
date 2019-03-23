import React from "react"
import { RouteComponentProps, navigate } from "@reach/router"
import { container } from "./css"
import { cx } from "emotion"

interface IProps extends RouteComponentProps {
  layoutClass: string
}
function Places(props: IProps) {
  const { layoutClass } = props
  // navigate
  return (
    <div className={cx(layoutClass, container)}>
      <h1 onClick={() => navigate("place 1")}>place 1</h1>
      <h1 onClick={() => navigate("place 2")}>place 2</h1>
      <h1 onClick={() => navigate("place 3")}>place 3</h1>
      <h1 onClick={() => navigate("place 4")}>place 4</h1>
      <h1 onClick={() => navigate("place 5")}>place 5</h1>
      <h1 onClick={() => navigate("place 6")}>place 6</h1>
      <h1 onClick={() => navigate("place 7")}>place 7</h1>
    </div>
  )
}
export default Places
