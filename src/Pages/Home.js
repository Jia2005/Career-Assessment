import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../Components/Common/Navbar';
import Footer from './../Components/Common/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#031540]">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-red-500 text-5xl font-bold text-center mb-5 font-sans">
          Welcome to MyCareer !!!
        </h1>
        
        <p className="text-yellow-400 text-2xl font-semibold text-center font-sans mb-10">
          The place where you find all the resources for your career
        </p>
        
        <div className="w-full max-w-4xl p-6 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg mt-6">
          <h2 className="text-white text-2xl font-semibold mb-4">
            What we offer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 p-5 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
              <h3 className="text-yellow-300 text-xl font-semibold mb-2">Career Assessment</h3>
              <p className="text-white mb-4">
                Take our comprehensive assessment to discover the perfect career path based on your strengths, 
                personality traits, and values.
              </p>
              <Link to="/assessment" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Take Assessment
              </Link>
            </div>
            
            <div className="bg-white/20 p-5 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
              <h3 className="text-yellow-300 text-xl font-semibold mb-2">Career Resources</h3>
              <p className="text-white mb-4">
                Access our exclusive collection of resources, courses, and materials tailored to your career path.
              </p>
              <Link to="/dashboard" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                View Resources
              </Link>
            </div>
            
            <div className="bg-white/20 p-5 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
              <h3 className="text-yellow-300 text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-white mb-4">
                Connect with like-minded individuals, share experiences, and learn from peers in our community.
              </p>
              <Link to="/community" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Join Community
              </Link>
            </div>
            
            <div className="bg-white/20 p-5 rounded-lg shadow-md hover:bg-white/30 transition duration-300">
              <h3 className="text-yellow-300 text-xl font-semibold mb-2">Career Blog</h3>
              <p className="text-white mb-4">
                Stay updated with the latest trends, tips, and insights in your field through our career blog.
              </p>
              <Link to="/blog" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Read Blog
              </Link>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mt-10 text-center">
          <Link 
            to="/register" 
            className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;