import { useState } from 'react';

const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjectOne: '',
    subjectTwo: '',
    strengthOne: '',
    strengthTwo: '',
    personalityOne: '',
    personalityTwo: '',
    valueOne: '',
    valueTwo: '',
  });

  const [errors, setErrors] = useState({
    subjectTwo: '',
    strengthTwo: '',
    personalityTwo: '',
    valueTwo: '',
  });

  const subjects = ['Mathematics', 'English', 'Science', 'Social Sciences'];
  const strengths = [
    'Spoken English (Public Speaking)',
    'Literature Writing',
    'Coding',
    'Problem Solving',
    'Leadership',
    'Creativity'
  ];
  const personalityTraits = [
    'Assertive',
    'Confident',
    'Cooperative',
    'Extroversion',
    'Conscientiousness / Rational'
  ];
  const values = [
    'Courage',
    'Dependability',
    'Honesty',
    'Integrity',
    'Respect',
    'Teamwork',
    'Wisdom'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'subjectTwo' && value === formData.subjectOne) {
      setErrors({...errors, subjectTwo: 'First and second subjects cannot be the same'});
    } else if (name === 'strengthTwo' && value === formData.strengthOne) {
      setErrors({...errors, strengthTwo: 'First and second strengths cannot be the same'});
    } else if (name === 'personalityTwo' && value === formData.personalityOne) {
      setErrors({...errors, personalityTwo: 'First and second personality traits cannot be the same'});
    } else if (name === 'valueTwo' && value === formData.valueOne) {
      setErrors({...errors, valueTwo: 'First and second values cannot be the same'});
    } else if (name === 'subjectOne' && value === formData.subjectTwo) {
      setErrors({...errors, subjectTwo: 'First and second subjects cannot be the same'});
    } else if (name === 'strengthOne' && value === formData.strengthTwo) {
      setErrors({...errors, strengthTwo: 'First and second strengths cannot be the same'});
    } else if (name === 'personalityOne' && value === formData.personalityTwo) {
      setErrors({...errors, personalityTwo: 'First and second personality traits cannot be the same'});
    } else if (name === 'valueOne' && value === formData.valueTwo) {
      setErrors({...errors, valueTwo: 'First and second values cannot be the same'});
    } else {
      if (name === 'subjectOne' || name === 'subjectTwo') {
        setErrors({...errors, subjectTwo: ''});
      } else if (name === 'strengthOne' || name === 'strengthTwo') {
        setErrors({...errors, strengthTwo: ''});
      } else if (name === 'personalityOne' || name === 'personalityTwo') {
        setErrors({...errors, personalityTwo: ''});
      } else if (name === 'valueOne' || name === 'valueTwo') {
        setErrors({...errors, valueTwo: ''});
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      subjectTwo: formData.subjectOne === formData.subjectTwo && formData.subjectTwo !== '' ? 
        'First and second subjects cannot be the same' : '',
      strengthTwo: formData.strengthOne === formData.strengthTwo && formData.strengthTwo !== '' ? 
        'First and second strengths cannot be the same' : '',
      personalityTwo: formData.personalityOne === formData.personalityTwo && formData.personalityTwo !== '' ? 
        'First and second personality traits cannot be the same' : '',
      valueTwo: formData.valueOne === formData.valueTwo && formData.valueTwo !== '' ? 
        'First and second values cannot be the same' : ''
    };
    
    setErrors(newErrors);
    if (Object.values(newErrors).some(error => error !== '')) {
      console.log('Form has errors:', newErrors);
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Assessment submitted successfully!');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subjectOne: '',
      subjectTwo: '',
      strengthOne: '',
      strengthTwo: '',
      personalityOne: '',
      personalityTwo: '',
      valueOne: '',
      valueTwo: '',
    });
    setErrors({
      subjectTwo: '',
      strengthTwo: '',
      personalityTwo: '',
      valueTwo: '',
    });
  };

  const SelectField = ({ label, name, options, value, onChange, error }) => (
    <div className="mb-6">
      <label 
        htmlFor={name} 
        className="block text-lg font-medium text-white mb-2"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 bg-opacity-30 bg-white rounded-lg border ${
          error ? 'border-red-500' : 'border-white'
        } text-white`}
        required
      >
        <option value="" disabled>Select your choice</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="bg-gray-800 text-white">
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-red-400 text-sm">{error}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-indigo-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
          Career Assessment Form
        </h1>
        
        <div className="bg-indigo-800 bg-opacity-50 rounded-xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-semibold text-white border-b border-indigo-500 pb-2">
                Personal Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-opacity-30 bg-white rounded-lg border border-white text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-lg font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-opacity-30 bg-white rounded-lg border border-white text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-semibold text-white border-b border-indigo-500 pb-2">
                Subject Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="First Subject of Interest"
                  name="subjectOne"
                  options={subjects}
                  value={formData.subjectOne}
                  onChange={handleChange}
                />
                
                <SelectField
                  label="Second Subject of Interest"
                  name="subjectTwo"
                  options={subjects}
                  value={formData.subjectTwo}
                  onChange={handleChange}
                  error={errors.subjectTwo}
                />
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-semibold text-white border-b border-indigo-500 pb-2">
                Your Strengths
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="First Strength"
                  name="strengthOne"
                  options={strengths}
                  value={formData.strengthOne}
                  onChange={handleChange}
                />
                
                <SelectField
                  label="Second Strength"
                  name="strengthTwo"
                  options={strengths}
                  value={formData.strengthTwo}
                  onChange={handleChange}
                  error={errors.strengthTwo}
                />
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-semibold text-white border-b border-indigo-500 pb-2">
                Personality Traits
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="First Personality Trait"
                  name="personalityOne"
                  options={personalityTraits}
                  value={formData.personalityOne}
                  onChange={handleChange}
                />
                
                <SelectField
                  label="Second Personality Trait"
                  name="personalityTwo"
                  options={personalityTraits}
                  value={formData.personalityTwo}
                  onChange={handleChange}
                  error={errors.personalityTwo}
                />
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-semibold text-white border-b border-indigo-500 pb-2">
                Your Values
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SelectField
                  label="First Value"
                  name="valueOne"
                  options={values}
                  value={formData.valueOne}
                  onChange={handleChange}
                />
                
                <SelectField
                  label="Second Value"
                  name="valueTwo"
                  options={values}
                  value={formData.valueTwo}
                  onChange={handleChange}
                  error={errors.valueTwo}
                />
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 pt-6">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
              >
                Submit Assessment
              </button>
              
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                Reset Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentForm;