import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import Favorities from './page/Favorities'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorities' element={<Favorities/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
