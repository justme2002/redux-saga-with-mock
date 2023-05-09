export const getPosts = () => {
  return {
    type: "GET_POSTS"
  }
}

export const getPostsSuccess = (payload) => {
  return {
    type: "GET_POSTS_SUCCESS",
    payload
  }
}

export const getPostsFail = (payload) => {
  return {
    type: "GET_POSTS_FAIL",
    payload
  }
}

export const getPostById = (payload) => {
  return {
    type: "GET_POST_BY_ID",
    payload
  }
}

export const getPostByIdSuccess = (payload) => {
  return {
    type: "GET_POST_BY_ID_SUCCESS",
    payload
  }
}

export const getPostByIdFailed = (payload) => {
  return {
    type: "GET_POST_BY_ID_FAIL",
    payload
  }
}

export const deletePostById = (payload) => {
  return {
    type: "DELETE_POST_BY_ID",
    payload
  }
}

export const deletePostByIdSuccess = () => {
  return {
    type: "DELETE_POST_BY_ID_SUCCESS",
  }
}

export const resetIsDelete = () => {
  return {
    type: "RESET_DELETE_TO_STATE"
  }
}