import React from "react"
import { connect } from "react-redux"
import intersection from "ramda/es/intersection"
import { ReduxState } from "../../redux/reducers"

interface IProps {
  reqPerm: Array<string>
  authorities: Array<string>
  redirect?: boolean
}

class AuthWrapper extends React.Component<IProps> {
  render() {
    const { reqPerm, authorities } = this.props
    const hasPerm = intersection(reqPerm, authorities).length > 0
    if (hasPerm) return this.props.children
    else return null
  }
}

function mapStateToProps(state: ReduxState) {
  return {
    authorities: state.account.authorities
  }
}

export default connect(mapStateToProps)(AuthWrapper)
