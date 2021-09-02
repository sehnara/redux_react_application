import React, { Component } from "react"
import { connect } from "react-redux"
import Details from "./Details"

class DetailsContainer extends Component {
  render() {
    return <Details select={this.props.select} />
  }
}

const mapStateToProps = (state) => ({
  select: state.user.select,
})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer)
