import React, { FunctionComponent } from "react"
import Error404 from "../components/Error404"
import { Router, RouteComponentProps, navigate } from "@reach/router"

interface IProps {
  layoutClass: string
}
function Routes(props: IProps) {
  return (
    <div className={props.layoutClass}>
      <Router>
        <Home path="/">
          <Place path="/:id" />
        </Home>
      </Router>
    </div>
  )
}

interface X extends RouteComponentProps {}
const Home: FunctionComponent<X> = props => {
  console.log(props)
  return (
    <>
      <div onClick={() => navigate(`10?offset=10`)}>10</div>
      <div onClick={() => navigate(`20?offset=20&limit=2`)}>20</div>
      <div onClick={() => navigate(`30?offset=30`)}>30</div>
      <div onClick={() => navigate(`40?offset=40`)}>40</div>
      <div onClick={() => navigate(`50?offset=50`)}>50</div>
      <div onClick={() => navigate(`60?offset=60`)}>60</div>
      {props.children}
    </>
  )
}

interface Y extends RouteComponentProps {
  id?: string
}
const Place: FunctionComponent<Y> = props => {
  console.log(props)
  return <h1>{`${props.id} Selected`}</h1>
}

export default Routes
