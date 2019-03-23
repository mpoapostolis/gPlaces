import React from "react"
import { layoutContainer, main, header } from "./css"
import Header from "../../components/Header"
import { RouteComponentProps } from "@reach/router"
import PlaceDetails from "../../components/PlaceDetails"

interface IProps extends RouteComponentProps {
  placeId?: string
}

function Detail(props: IProps) {
  const { placeId } = props
  console.log(placeId)
  return (
    <div className={layoutContainer}>
      <Header layoutClass={header} />
      <PlaceDetails placeId={placeId} layoutClass={main} />
    </div>
  )
}

export default Detail
