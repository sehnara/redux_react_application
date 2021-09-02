import React, { Component } from "react"
import { connect } from "react-redux"
import { setSearch } from "../../redux/modules/user"
import Search from "./Search"

class SearchContainer extends Component {
  handleSearch = (search) => {
    const { setSearch } = this.props
    setSearch(search)
  }

  render() {
    return <Search onSearch={this.handleSearch} />
  }
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})
const mapDispatchToProps = (dispatch) => ({
  setSearch: (search) => dispatch(setSearch(search)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
