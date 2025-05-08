import React from 'react';
import Navbar from './../Components/Common/Navbar';
import RegisterForm from './../Components/Forms/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <RegisterForm />
      </main>
    </div>
  );
};

export default Register;
