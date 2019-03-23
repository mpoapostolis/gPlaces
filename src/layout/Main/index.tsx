import React, { Component } from "react"
import { layoutContainer, main, header, filters } from "./css"
import Filters from "../../components/Filters"
import Header from "../../components/Header"
import Routes from "../../Routes"

interface IProps {}
function MainLayout(props: IProps) {
  return (
    <div className={layoutContainer}>
      <Header layoutClass={header} />
      <Filters layoutClass={filters} />
      <Routes layoutClass={main} />
    </div>
  )
}

export default MainLayout
