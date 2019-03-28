import React from "react"
import { RouteComponentProps } from "@reach/router"
import { container } from "./css"
import { cx } from "emotion"
import Card from "../Card"
import { connect } from "react-redux"
import { ReduxState } from "../../redux/reducers"
import { Dispatch, bindActionCreators, Action } from "redux"
import actions from "../../redux/actions"

interface IProps extends RouteComponentProps {
  layoutClass: string
}
function Places(props: IProps) {
  const { layoutClass } = props

  return (
    <div className={cx(layoutClass, container)}>
      <Card />
    </div>
  )
}

function mapStateToProps(state: ReduxState) {
  return {
    places: state.places.results
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators(
    {
      getPlaces: actions.getPlaces
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Places)
