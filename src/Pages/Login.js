import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import AlertBox from '../components/common/AlertBox';
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  const [alert, setAlert] = useState({ show: false, message: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    // In a real app, you would validate against your API
    // This is simplified for demo purposes
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      login({ name: 'User', email: credentials.email });
      navigate('/dashboard');
    } else {
      setAlert({
        show: true,
        message: 'Invalid email or password'
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
          <h1 className="text-4xl font-bold text-center text-white mb-8">Login</h1>
          
          <LoginForm onSubmit={handleLogin} />
          
          <div className="mt-6 text-center">
            <Link to="/register" className="text-blue-300 hover:text-blue-200 transition-colors">
              Don't have an account? Register here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;