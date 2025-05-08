import React from 'react';
import { User } from 'lucide-react';

const ProfileCard = ({ name, email, interests }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-50 flex items-center justify-center p-6 md:w-1/4">
          <User size={80} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50">
              <p className="font-medium text-gray-700">{name || 'User Name'}</p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <p className="text-gray-600">{email || 'user@example.com'}</p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <p className="text-gray-600">
                {interests && interests.length > 0 
                  ? interests.join(', ') 
                  : 'No interests specified'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;