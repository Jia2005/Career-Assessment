import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import AlertBox from '../components/common/AlertBox';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [alert, setAlert] = useState({ show: false, message: '' });
  const discussions = [
    {
      id: 1,
      title: 'Advice for switching from medicine to tech?',
      author: 'medstudent22',
      content: "I've been studying medicine for 2 years but feel drawn to software development. Has anyone made this transition? What skills should I focus on?",
      replies: 3,
      date: '2023-05-02'
    },
    {
      id: 2,
      title: 'Best resources for learning data science?',
      author: 'dataExplorer',
      content: "I want to transition into data science but don't know where to start. Any recommended courses or books for beginners?",
      replies: 5,
      date: '2023-05-05'
    },
    {
      id: 3,
      title: 'How to prepare for MBA interviews?',
      author: 'futureLeader',
      content: "I have MBA interviews coming up next month. Any tips from those who've been through the process?",
      replies: 7,
      date: '2023-05-07'
    }
  ];
  
  const events = [
    {
      id: 1,
      title: 'Virtual Career Fair',
      date: '2023-06-15',
      time: '10:00 AM - 4:00 PM',
      description: 'Connect with employers from various industries. Great opportunity for networking and job hunting!',
      location: 'Online'
    },
    {
      id: 2,
      title: 'Resume Building Workshop',
      date: '2023-06-20',
      time: '2:00 PM - 4:00 PM',
      description: 'Learn how to create a standout resume that highlights your skills and experiences.',
      location: 'Online'
    }
  ];
  
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Senior Data Scientist at Tech Corp',
      specialties: ['Data Science', 'Machine Learning', 'Career Transitions'],
      availableFor: 'Resume reviews, mock interviews, career advice'
    },
    {
      id: 2,
      name: 'James Wilson',
      title: 'Engineering Manager at InnoSoft',
      specialties: ['Software Engineering', 'Team Leadership', 'Technical Interviews'],
      availableFor: 'Mock interviews, coding practice, career guidance'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      title: 'Healthcare Administrator',
      specialties: ['Healthcare Management', 'Medical Administration', 'Hospital Operations'],
      availableFor: 'Career advice, resume reviews, industry insights'
    }
  ];

  const handleNewDiscussion = () => {
    setAlert({
      show: true,
      message: 'Feature coming soon! You will be able to create new discussions.'
    });
    
    setTimeout(() => {
      setAlert({ show: false, message: '' });
    }, 3000);
  };

  const handleMentorRequest = () => {
    setAlert({
      show: true,
      message: 'Mentor request sent! They will contact you shortly.'
    });
    
    setTimeout(() => {
      setAlert({ show: false, message: '' });
    }, 3000);
  };

  const handleRegisterEvent = (eventId) => {
    setAlert({
      show: true,
      message: 'You have successfully registered for this event!'
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
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Community
          </h1>
          
          {/* Tab navigation */}
          <div className="flex border-b border-gray-700 mb-6">
            <button
              className={`px-4 py-2 mr-2 ${activeTab === 'discussions' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('discussions')}
            >
              Discussions
            </button>
            <button
              className={`px-4 py-2 mr-2 ${activeTab === 'events' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'mentors' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('mentors')}
            >
              Find a Mentor
            </button>
          </div>
          
          {activeTab === 'discussions' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">Career Discussions</h2>
                <button
                  onClick={handleNewDiscussion}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Start New Discussion
                </button>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-indigo-900 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-medium text-white">{discussion.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">
                      Posted by {discussion.author} on {discussion.date}
                    </p>
                    <p className="text-gray-200 mt-2">{discussion.content}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-gray-300 text-sm">{discussion.replies} replies</span>
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Upcoming Career Events</h2>
              
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="bg-indigo-900 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-medium text-white">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <p className="text-gray-300">
                        <span className="font-medium">Date:</span> {event.date}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Time:</span> {event.time}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Location:</span> {event.location}
                      </p>
                    </div>
                    <p className="text-gray-200 mt-2">{event.description}</p>
                    <div className="mt-4">
                      <button 
                        onClick={() => handleRegisterEvent(event.id)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'mentors' && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Available Mentors</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {mentors.map((mentor) => (
                  <div key={mentor.id} className="bg-indigo-900 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-medium text-white">{mentor.name}</h3>
                    <p className="text-blue-300 font-medium">{mentor.title}</p>
                    
                    <div className="mt-3">
                      <p className="text-gray-300 text-sm font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {mentor.specialties.map((specialty, index) => (
                          <span 
                            key={index} 
                            className="bg-indigo-800 text-blue-200 text-xs px-2 py-1 rounded"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-gray-300 text-sm font-medium">Available for:</p>
                      <p className="text-gray-200 text-sm">{mentor.availableFor}</p>
                    </div>
                    
                    <div className="mt-4">
                      <button 
                        onClick={handleMentorRequest}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors w-full"
                      >
                        Request Mentorship
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;