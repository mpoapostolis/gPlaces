import React, { Component, useEffect } from "react"
import I18n from "./I18n"
import MainLayout from "./layout/Main"
import { ReduxState } from "./redux/reducers"
import { bindActionCreators, Dispatch, AnyAction } from "redux"
import actions from "./redux/actions"
import { connect } from "react-redux"
import { Coords } from "./redux/reducers/account"

export type tFunc = (key: string) => string

interface IProps {
  setAccountInfo: (e: Coords) => void
}

function App(props: IProps) {
  const getPosition = (pos: Position) => {
    const longitude = pos.coords.longitude
    const latitude = pos.coords.latitude
    props.setAccountInfo({ longitude, latitude })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
  }, [])

  const t = (key: string): string => {
    return key
  }
  return (
    <I18n.Provider value={t}>
      <MainLayout />
    </I18n.Provider>
  )
}

function mapStateToProps(state: ReduxState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return bindActionCreators(
    {
      setAccountInfo: actions.setAccountInfo
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
