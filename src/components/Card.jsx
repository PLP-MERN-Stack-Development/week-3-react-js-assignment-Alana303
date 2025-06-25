// src/components/Card.jsx
import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h2>
      {children}
    </div>
  );
}
