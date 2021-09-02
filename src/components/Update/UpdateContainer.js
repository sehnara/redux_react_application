import axios from "axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import { setSelect, setUpdate } from "../../redux/modules/user"
import Update from "./Update"

class UpdateContainer extends Component {
  handleUpdate = async (updatedUser) => {
    await axios({
      method: "PUT",
      url: `https://last-server-application.herokuapp.com/user/update/${updatedUser.id}`,
      data: updatedUser,
    })
    const newUsers = await axios.get("https://last-server-application.herokuapp.com/user")
    this.props.setUpdate(newUsers.data)
    this.props.setSelect(updatedUser)
  }

  render() {
    const { select } = this.props
    return <Update select={select} onUpdate={this.handleUpdate} />
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
  select: state.user.select,
})
const mapDispatchToProps = (dispatch) => ({
  setUpdate: (users) => dispatch(setUpdate(users)),
  setSelect: (user) => dispatch(setSelect(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(UpdateContainer)
