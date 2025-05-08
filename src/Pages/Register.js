import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import AlertBox from './Components/Common/AlertBox';
import RegisterForm from './Components/Forms/RegisterForm';

const Register = () => {
  const [alert, setAlert] = useState({ show: false, message: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (userData) => {
    // In a real app, you would register via your API
    // This is simplified for demo purposes
    if (userData.email && userData.password && userData.name) {
      // Mock successful registration
      login({ name: userData.name, email: userData.email });
      navigate('/assessment');
    } else {
      setAlert({
        show: true,
        message: 'Please fill in all fields'
      });
      setTimeout(() => {
        setAlert({ show: false, message: '' });
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-950 px-4">
      {alert.show && <AlertBox message={alert.message} />}
      
      <div className="w-full max-w-md">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-xl p-8 border border-indigo-800/50">
          <h1 className="text-4xl font-bold text-center text-white mb-6">Register</h1>
          
          <div className="text-white text-center mb-6">
            <p>Welcome to our Career Assessment Program!</p>
            <p className="mt-2">We'll help you find your ideal career path based on your strengths, personality traits, and values.</p>
          </div>
          
          <RegisterForm onSubmit={handleRegister} />
          
          <div className="mt-6 text-center">
            <Link to="/login" className="text-blue-300 hover:text-blue-200 transition-colors">
              Already have an account? Login here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;