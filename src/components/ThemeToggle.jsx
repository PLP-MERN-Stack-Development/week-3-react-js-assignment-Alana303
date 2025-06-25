// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../utils/ThemeContext.jsx';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mb-4 px-4 py-2 border rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
