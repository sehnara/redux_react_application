import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { deleteOne, getAll, setSearch, setSelect } from "../../redux/modules/user"
import List from "./List"

const getUsers = async () => {
  const result = await axios({
    method: "GET",
    url: "https://last-server-application.herokuapp.com/user",
  })
  return result.data
}

class ListContainer extends Component {
  init = async () => {
    const { getAll } = this.props
    const users = await getUsers()
    getAll(users)
  }

  componentDidMount() {
    this.init()
  }

  render() {
    return <List props={this.props} />
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
  search: state.user.search,
  select: state.user.select,
})
const mapDispatchToProps = (dispatch) => ({
  getAll: (users) => dispatch(getAll(users)),
  deleteOne: (users) => dispatch(deleteOne(users)),
  setSelect: (select) => dispatch(setSelect(select)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
