import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'
import Generateimages from './pages/Generateimages.jsx'
import Removebackground from './pages/Removebackground.jsx'
import RemoveObject from './pages/RemoveObject.jsx'
import ReviewResume from './pages/ReviewResume.jsx'
import Community from './pages/Community.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='write-article' element={<WriteArticle/>}/>
          <Route path='blog-titles' element={<BlogTitles/>}/>
          <Route path='generate-images' element={<Generateimages/>}/>
          <Route path='remove-background' element={<Removebackground/>}/>
          <Route path='remove-object' element={<RemoveObject/>}/>
          <Route path='review-resume' element={<ReviewResume/>}/>
          <Route path='community' element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
