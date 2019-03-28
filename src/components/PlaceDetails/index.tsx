import React from "react"
import { cx } from "emotion"
import { detailContainer } from "./css"
import { ReduxState } from "../../redux/reducers"
import { connect } from "react-redux"

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

function mapStateToProps(state: ReduxState) {
  return {}
}

export default connect(mapStateToProps)(Details)
