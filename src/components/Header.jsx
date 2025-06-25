import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold text-xl">Jeff's App</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/tasks">Tasks</Link>
      </div>
    </nav>
  )
}

export default Header
