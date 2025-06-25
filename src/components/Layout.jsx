// src/components/Layout.jsx
import React from 'react'; // ✅ Add this line
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ThemeToggle from './ThemeToggle.jsx';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
      <Navbar />
      <main className="flex-1 p-6">
        <ThemeToggle />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
