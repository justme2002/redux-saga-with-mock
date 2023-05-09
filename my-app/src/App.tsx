import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SinglePost from './pages/SinglePost'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/:id' element={<SinglePost/>}></Route>
    </Routes>
  )
}

export default App