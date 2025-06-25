// src/pages/Posts.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p className="p-6 text-center text-gray-700 dark:text-gray-300">Loading posts...</p>;
  }

  if (error) {
    return <p className="p-6 text-center text-red-600">Error loading posts.</p>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">📝 API Posts</h2>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-800 transition-transform hover:scale-[1.02]"
            >
              <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300 mb-2 capitalize">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {post.body.length > 100 ? `${post.body.slice(0, 100)}…` : post.body}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Posts;
