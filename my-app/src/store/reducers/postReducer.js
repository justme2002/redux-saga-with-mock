const initialState = {
  posts: [],
  post: {},
  isLoading: false,
  isDelete: false
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        isLoading: true
      }
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload.data,
        isLoading: false
      }
    case "GET_POST_BY_ID": 
      return {
        ...state,
        isLoading: true
      }
    case "GET_POST_BY_ID_SUCCESS":
      return {
        ...state,
        isLoading: false,
        post: action.payload.data
      }
    case "DELETE_POST_BY_ID": 
      return {
        ...state,
        isLoading: true
      }
    case "DELETE_POST_BY_ID_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isDelete: true
      }
    case "RESET_DELETE_TO_STATE":
      return {
        ...state,
        isDelete: false
      }
    default:
      return state
  }
}