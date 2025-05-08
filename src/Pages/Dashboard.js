import React, { useContext, useEffect, useState } from 'react';
import Navbar from './../Components/Common/Navbar';
import Footer from './../Components/Common/Footer';
import ProfileCard from './../Components/Dashboard/ProfileCard';
import CourseCard from './../Components/Dashboard/CourseCard';
import { AuthContext } from './../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentUser, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // In a real app, you would fetch course recommendations from API
    // based on user assessment results
    if (currentUser) {
      // Example logic for course recommendations based on user interests
      const getRecommendedCourses = () => {
        // This is placeholder logic - in a real app, you'd have more sophisticated recommendation logic
        const userInterests = currentUser.interests || [];
        
        const courseMappings = {
          "Mathematics": [
            {
              courseName: "Engineering Field",
              courseDescription: "An exciting field full of opportunities that won't extinguish for years to come!",
              resourceLink: "https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link"
            },
            {
              courseName: "Medical Field",
              courseDescription: "Saving lives is humanity's biggest value.",
              resourceLink: "https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link"
            }
          ],
          "Science": [
            {
              courseName: "Medical Field",
              courseDescription: "Saving lives is humanity's biggest value.",
              resourceLink: "https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link"
            },
            {
              courseName: "Engineering Field",
              courseDescription: "An exciting field full of opportunities that won't extinguish for years to come!",
              resourceLink: "https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link"
            }
          ],
          "English": [
            {
              courseName: "Literature",
              courseDescription: "Dive into the amazing world of Shakespearean English.",
              resourceLink: "https://drive.google.com/drive/folders/sample-literature"
            },
            {
              courseName: "Business Management",
              courseDescription: "A management level position in the top companies.",
              resourceLink: "https://drive.google.com/drive/folders/sample-business"
            }
          ],
          "Social Sciences": [
            {
              courseName: "Humanities",
              courseDescription: "Explore the depths of human society and culture.",
              resourceLink: "https://drive.google.com/drive/folders/sample-humanities"
            },
            {
              courseName: "Business Management",
              courseDescription: "A management level position in the top companies.",
              resourceLink: "https://drive.google.com/drive/folders/sample-business"
            }
          ]
        };

        // Get recommended courses based on user interests
        let recommendations = [];
        userInterests.forEach(interest => {
          if (courseMappings[interest]) {
            recommendations = [...recommendations, ...courseMappings[interest]];
          }
        });

        // If no specific recommendations found, return defaults
        if (recommendations.length === 0) {
          recommendations = [
            {
              courseName: "Career Exploration",
              courseDescription: "Discover various career paths suited to your skills and interests.",
              resourceLink: "https://drive.google.com/drive/folders/sample-career-exploration"
            },
            {
              courseName: "Personal Development",
              courseDescription: "Build essential skills for professional growth and success.",
              resourceLink: "https://drive.google.com/drive/folders/sample-personal-dev"
            }
          ];
        }

        // Limit to 2 recommendations
        return recommendations.slice(0, 2);
      };

      setRecommendedCourses(getRecommendedCourses());
    }
  }, [currentUser, isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 border-b border-red-300 pb-2 mb-4">
            Your Details
          </h2>
          <ProfileCard 
            name={currentUser?.name} 
            email={currentUser?.email} 
            interests={currentUser?.interests} 
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 border-b border-red-300 pb-2 mb-4">
            Your Recommended Courses
          </h2>
          
          {recommendedCourses.map((course, index) => (
            <CourseCard 
              key={index}
              courseName={course.courseName}
              courseDescription={course.courseDescription}
              resourceLink={course.resourceLink}
            />
          ))}

          {recommendedCourses.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-gray-600">
                Complete the assessment to get personalized course recommendations!
              </p>
              <button 
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200"
                onClick={() => navigate('/assessment')}
              >
                Take Assessment
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;