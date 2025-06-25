// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white m-8 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">🌐 MyApp</div>
        <div className="flex gap-6 text-sm sm:text-base">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/tasks" className="hover:underline">Task Manager</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
