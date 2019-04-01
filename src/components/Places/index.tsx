import React, { useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import { container } from "./css"
import { cx } from "emotion"
import { connect } from "react-redux"
import { ReduxState } from "../../redux/reducers"
import { Dispatch, bindActionCreators, Action } from "redux"
import actions from "../../redux/actions"
import Leaflet from "leaflet"
import { Coords } from "../../redux/reducers/account"
interface IProps extends RouteComponentProps {
  layoutClass: string
  coords: Coords
}
function Places(props: IProps) {
  const { layoutClass, coords } = props
  useEffect(() => {
    if (coords) {
      const [lat, lng] = [coords.latitude, coords.longitude]
      const map = Leaflet.map("mapid").setView([lat, lng], 13)
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
    }
  }, [coords])

  return <div id="mapid" className={cx(layoutClass, container)} />
}

function mapStateToProps(state: ReduxState) {
  return {
    coords: state.account.coords,
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
