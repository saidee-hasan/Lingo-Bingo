import React from 'react';
import { Link } from 'react-router-dom';

function Categories({ categoriesData }) {
  // Array of background colors
  const backgroundColors = [
    '#FFDDC1', // Light Orange
    '#FFABAB', // Light Red
    '#FFC3A0', // Light Pink
    '#FF677D', // Light Purple
    '#D4A5A5', // Light Brown
    '#392F5A', // Dark Purple
    '#6A0572', // Dark Pink
    '#D9BF77', // Light Yellow
    '#B9FBC0', // Light Green
    '#A0E7E5'  // Light Blue
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Vocabulary Learning Lessons</h1>

      {categoriesData.length === 0 ? ( // Conditional rendering for empty state
        <p className="text-center text-gray-600">No categories available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoriesData.map((lesson, index) => (
            <Link 
              key={lesson.id} 
              to={`/lessons/${lesson.lesson_no}`} 
              aria-label={`Go to lesson: ${lesson.title}`}
            >
              <div 
                className="p-5 h-48 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between" 
                style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }} // Apply background color
              >
                <h2 className="text-xl font-semibold text-center">{lesson.title}</h2>
                <p className="text-base text-gray-700 text-center">{lesson.description}</p>
                <h1 className="text-xl text-center text-gray-800 font-bold">{lesson.duration}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="view-more text-center mt-8">
        <Link 
          to="/tutorial"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default Categories;