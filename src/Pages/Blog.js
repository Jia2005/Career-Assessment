import React, { useState, useEffect } from 'react';
import Navbar from './Components/Common/Navbar';
import Footer from './Components/Common/Footer';
import AlertBox from './Components/Common/AlertBox';

const Blog = () => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    content: ''
  });
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      email: 'career.expert@example.com',
      title: 'How to Prepare for a Tech Interview',
      content: 'Preparing for a tech interview can be intimidating, but with the right approach, you can ace it. Start by thoroughly reviewing the job description and understanding what skills they are looking for. Practice coding problems regularly using platforms like LeetCode or HackerRank. Additionally, brush up on system design concepts if you are applying for a senior role. Finally, research the company culture and prepare questions to ask your interviewers.',
      createdAt: '2023-03-15'
    },
    {
      id: 2,
      email: 'medical.student@example.com',
      title: 'My Journey to Medical School',
      content: 'Getting into medical school was one of the most challenging but rewarding experiences of my life. It required consistent studying, dedication to extracurricular activities, and a genuine passion for healthcare. My advice to future applicants: focus on maintaining a good GPA, get quality clinical experience, and prepare thoroughly for the MCAT. Lastly, write a personal statement that truly reflects who you are and why medicine is your calling.',
      createdAt: '2023-04-10'
    }
  ]);
  
  const [alert, setAlert] = useState({ show: false, message: '' });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.title || !formData.content) {
      setAlert({
        show: true,
        message: 'Please fill in all fields'
      });
      return;
    }
    
    const newPost = {
      id: Date.now(),
      email: formData.email,
      title: formData.title,
      content: formData.content,
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setPosts([newPost, ...posts]);
    
    setFormData({
      email: '',
      title: '',
      content: ''
    });
    
    setAlert({
      show: true,
      message: 'Post submitted successfully!'
    });
    setTimeout(() => {
      setAlert({ show: false, message: '' });
    }, 3000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <Navbar />
      
      {alert.show && <AlertBox message={alert.message} />}
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Career Blog
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-indigo-800/50 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Share Your Experience</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
                  Post Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Title of your post"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                  Post Content
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your thoughts, questions, or experiences"
                ></textarea>
              </div>
              
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Submit Post
                </button>
              </div>
            </form>
          </div>
          
          {/* List of posts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Recent Posts</h2>
            
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-black/30 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-indigo-800/50"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  <span className="text-xs text-gray-400">{post.createdAt}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{post.email} says:</p>
                <p className="text-gray-300 whitespace-pre-wrap">{post.content}</p>
                
                <div className="mt-4 flex justify-end">
                  <button className="text-blue-400 hover:text-blue-300 text-sm mr-4">
                    Like
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    Comment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;