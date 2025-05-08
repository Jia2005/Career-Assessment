import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-red-600 text-3xl font-bold">MyCareer</Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {currentUser ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                <div className="relative group">
                  <button className="text-gray-600 hover:text-gray-900 inline-flex items-center">
                    Your Courses
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 w-48 mt-1 rounded-md z-10">
                    <a href="https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Course 1</a>
                    <a href="https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Course 2</a>
                    <div className="border-t border-gray-200 my-1"></div>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Wanna try others?</a>
                  </div>
                </div>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900">Community</Link>
                <button 
                  onClick={logout}
                  className="ml-4 text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                <Link to="/register" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {currentUser ? (
              <>
                <Link to="/dashboard" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">Dashboard</Link>
                <Link to="/blog" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">Community</Link>
                <div className="px-3 py-2">
                  <p className="text-gray-600">Your Courses</p>
                  <a href="https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link" className="block px-3 py-1 text-gray-500 hover:text-gray-700">Course 1</a>
                  <a href="https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link" className="block px-3 py-1 text-gray-500 hover:text-gray-700">Course 2</a>
                </div>
                <button 
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">Login</Link>
                <Link to="/register" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;