import React, { Component } from "react"
import { connect } from "react-redux"
import Buttons from "./Buttons"

class ButtonsContainer extends Component {
  render() {
    return <Buttons />
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer)
