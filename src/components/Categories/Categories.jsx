import React from 'react';
import { Link } from 'react-router-dom';



function Categories({ categoriesData }) {
  return (
    <div className="container mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-6">Vocabulary Learning Lessons</h1>

      <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {categoriesData.map(lesson => (
      
<Link  key={lesson.id} to={`/category/${lesson.lesson_no}`}>
          <div
            key={lesson.id}
            className="bg-white p-4 h-52  rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <h2 className="text-lg font-semibold text-center mt-16">{lesson.title}</h2>
            <p className="text-sm text-gray-600 text-center">{lesson.description}</p>
          </div>


          </Link>
        ))}
      </div>

   

      <div className="view-more text-center mt-6">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={() => window.location.href = 'tutorials.html'}
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default Categories;