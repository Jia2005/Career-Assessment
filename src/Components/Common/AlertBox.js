import React, { useEffect, useState } from 'react';

const AlertBox = ({ message, type = 'error', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!message);
  
  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onClose) onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);
  
  if (!message || !isVisible) return null;
  
  const bgColor = type === 'error' 
    ? 'bg-red-100 border-red-500' 
    : type === 'success'
      ? 'bg-green-100 border-green-500'
      : 'bg-blue-100 border-blue-500';
    
  const textColor = type === 'error' 
    ? 'text-red-700' 
    : type === 'success'
      ? 'text-green-700'
      : 'text-blue-700';
  
  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-auto max-w-md px-4 py-3 ${bgColor} border-t-4 rounded-b shadow-md z-50`}>
      <div className="flex">
        <div className="py-1">
          {type === 'error' && (
            <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
            </svg>
          )}
          {type === 'success' && (
            <svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
          )}
          {type === 'info' && (
            <svg className="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v4a1 1 0 102 0V7zm-1 8a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          )}
        </div>
        <div>
          <p className={`font-bold ${textColor}`}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;