import React from "react"
import { Router, RouteComponentProps } from "@reach/router"
import Main from "../layout/Main"
import Detail from "../layout/Details"

interface IProps extends RouteComponentProps {}
function Routes(props: IProps) {
  return (
    <Router>
      <Main path="/" />
      <Detail path=":placeId" />
    </Router>
  )
}

export default Routes
