import React from 'react';
import Navbar from '../Components/Common/Navbar';
import AssessmentForm from './../Components/Forms/AssessmentForm';

const Assessment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
            Career Assessment Form
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg shadow-xl p-6 md:p-8 border border-indigo-800/50">
            <AssessmentForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assessment;
