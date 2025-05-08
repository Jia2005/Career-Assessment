import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import AssessmentForm from './Components/Forms/AssessmentForm';
import AlertBox from './Components/Common/AlertBox';

const Assessment = () => {
  const [alert, setAlert] = useState({ show: false, message: '' });
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    // In a real app, you would send this data to your API
    console.log('Assessment Data:', formData);
    
    // Show success message
    setAlert({
      show: true,
      message: 'Assessment submitted successfully!'
    });
    
    // Redirect to dashboard after 2 seconds
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <Navbar />
      
      {alert.show && <AlertBox message={alert.message} />}
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
            Career Assessment Form
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 border border-indigo-800/50">
            <p className="text-white text-center mb-6">
              Complete this assessment to receive personalized career recommendations based on your
              interests, strengths, personality traits, and values.
            </p>
            
            <AssessmentForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;