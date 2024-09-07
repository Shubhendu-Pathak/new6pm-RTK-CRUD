import React from 'react'
import MyNavbar from './components/MyNavbar'
import { Route, Routes } from 'react-router-dom'
import AllPosts from './components/AllPosts'
import CreatePost from './components/CreatePost'
import Preview from './components/Preview'
import Update from './components/Update'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
   
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<AllPosts/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/:id' element={<Preview/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
      </Routes>
    </div>
  )
}

export default App