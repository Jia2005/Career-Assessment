import React from 'react';
import { User, BookOpen, ExternalLink } from 'lucide-react';

const CourseCard = ({ courseName, courseDescription, resourceLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-6">
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-50 flex items-center justify-center p-6 md:w-1/4">
          <BookOpen size={64} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50">
              <h3 className="font-medium text-gray-800">{courseName || 'Course Name'}</h3>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <p className="text-gray-600">{courseDescription || 'Course description not available'}</p>
            </div>
            <div className="p-4 hover:bg-gray-50 flex items-center">
              <a 
                href={resourceLink || '#'} 
                className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;