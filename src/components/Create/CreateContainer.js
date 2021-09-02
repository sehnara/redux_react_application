import axios from "axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import { setCreate } from "../../redux/modules/user"
import Create from "./Create"

class CreateContainer extends Component {
  handleCreate = async (user) => {
    await axios({
      method: "POST",
      url: "https://last-server-application.herokuapp.com/user/create",
      data: user,
    })
    const newUsers = await axios({
      method: "GET",
      url: "https://last-server-application.herokuapp.com/user",
    })
    this.props.setCreate(newUsers.data)
  }

  render() {
    return <Create onCreate={this.handleCreate} />
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})
const mapDispatchToProps = (dispatch) => ({
  setCreate: (users) => dispatch(setCreate(users)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer)
