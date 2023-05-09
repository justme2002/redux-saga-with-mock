import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postSelector } from '../store/store'
import { deletePostById, getPostById, getPosts, resetIsDelete } from '../store/actions/post'

const Home = () => {
  const dispatch = useDispatch()
  const { posts, isDelete, isLoading } = useSelector(postSelector)
  useEffect(() => {
    dispatch(getPosts())

    return () => {
      dispatch(resetIsDelete())
    }
  }, [dispatch, isDelete])

  console.log(isLoading)

  console.log(posts)  
  // useEffect(() => {
  //   dispatch(getPostById({
  //     id: "1"
  //   }))
  // }, [])

  const deletePost = (id: number) => {
    dispatch(deletePostById({
      id
    }))
  }

  return (
    <div>
      {posts.map((post: { id: number, name: string }) => {
        return (
          <div>
            {post.name}
            <button onClick={() => deletePost(post.id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Home