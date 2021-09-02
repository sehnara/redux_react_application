// 1. action Types
const GETALL = "user/GETALL"
const DELETE = "user/DELETE"
const SEARCH = "user/SEARCH"
const SELECT = "user/SELECT"
const CREATE = "user/CREATE"
const UPDATE = "user/UPDATE"

// 2. action creators
export const getAll = (users) => ({
  type: GETALL,
  users,
})
export const deleteOne = (users) => {
  return {
    type: DELETE,
    users,
  }
}
export const setSearch = (search) => {
  return {
    type: SEARCH,
    search,
  }
}
export const setSelect = (select) => {
  return {
    type: SELECT,
    select,
  }
}
export const setCreate = (users) => {
  return {
    type: CREATE,
    users,
  }
}
export const setUpdate = (users) => {
  return {
    type: UPDATE,
    users,
  }
}

// 3. initial value
const initialValue = {
  users: [],
  search: "",
  select: {},
}
// 4. reducer
export default function userReducer(state = initialValue, action) {
  switch (action.type) {
    case GETALL:
      return applyGetAll(state, action)
    case DELETE:
      return applyDeleteOne(state, action)
    case SEARCH:
      return applySearch(state, action)
    case SELECT:
      return applySelect(state, action)
    case CREATE:
      return applyCreate(state, action)
    case UPDATE:
      return applyUpdate(state, action)
    default:
      return state
  }
}

const applyGetAll = (state, action) => {
  return {
    ...state,
    users: action.users,
  }
}
const applyDeleteOne = (state, action) => {
  return {
    ...state,
    users: action.users,
  }
}
const applySearch = (state, action) => {
  return { ...state, search: action.search }
}

const applySelect = (state, action) => {
  return { ...state, select: action.select }
}

const applyCreate = (state, action) => {
  return {
    ...state,
    users: action.users,
  }
}

const applyUpdate = (state, action) => {
  return {
    ...state,
    users: action.users,
  }
}
