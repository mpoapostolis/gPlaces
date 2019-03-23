import React from "react"
import { layoutContainer, main, header, filters } from "./css"
import Filters from "../../components/Filters"
import Header from "../../components/Header"
import { RouteComponentProps, Router } from "@reach/router"
import Places from "../../components/Places"

interface IProps extends RouteComponentProps {}

function MainLayout(props: IProps) {
  return (
    <div className={layoutContainer}>
      <Header layoutClass={header} />
      <Filters layoutClass={filters} />
      <Places layoutClass={main} />
    </div>
  )
}

export default MainLayout
