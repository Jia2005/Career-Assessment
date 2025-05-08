import React from 'react';
import Navbar from './../Components/Common/Navbar';
import LoginForm from './../Components/Forms/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
