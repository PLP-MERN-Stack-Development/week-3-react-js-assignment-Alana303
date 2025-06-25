// src/components/Button.jsx
import React from 'react';


const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-400 text-white hover:bg-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  

export default function Button({ label, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded text-white ';
  const colors = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    danger: 'bg-red-500 hover:bg-red-600',
  };
  return (
    <button className={base + (colors[variant] || colors.primary)}>
      {label}
    </button>
  );
}
