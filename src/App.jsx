// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Posts from './pages/Posts.jsx'
import Tasks from './pages/Tasks.jsx' // ✅ This uses the page version, not component TaskManager

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Layout>
  )
}

export default App
