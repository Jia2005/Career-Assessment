import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 bottom-0 w-full">
      <div className="container mx-auto px-4">
        <p className="text-center text-black font-bold">Want to know more about us?</p>
        <p className="text-center text-black">Contact us through our social media platforms</p>
        
        <div className="flex flex-wrap justify-center mt-4">
          <div className="w-full md:w-1/3 px-4 text-center mb-4 md:mb-0">
            <p className="font-bold">Phone number</p>
            <a href="tel:+919876543210" className="text-gray-700 hover:text-gray-900">+91 98765 43210</a>
          </div>
          
          <div className="w-full md:w-1/3 px-4 text-center mb-4 md:mb-0">
            <p className="font-bold">Email</p>
            <a href="mailto:MyCareer@gmail.com" className="text-gray-700 hover:text-gray-900">MyCareer@gmail.com</a>
          </div>
          
          <div className="w-full md:w-1/3 px-4 text-center mb-4 md:mb-0">
            <p className="font-bold">Instagram</p>
            <a href="#" className="text-gray-700 hover:text-gray-900">@MyCareer</a>
          </div>
        </div>
        
        <p className="text-center text-black mt-6">copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;