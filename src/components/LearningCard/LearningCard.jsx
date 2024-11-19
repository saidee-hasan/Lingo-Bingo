import React from 'react';

const lessons = [
  { id: 1, title: 'Lesson 1', link: 'lesson/lesson_1.html' },
  { id: 2, title: 'Lesson 2', link: 'lesson/lesson_2.html' },
  { id: 3, title: 'Lesson 3', link: 'lesson/lesson_3.html' },
  { id: 4, title: 'Lesson 4', link: 'lesson/lesson_4.html' },
  { id: 5, title: 'Lesson 5', link: 'lesson/lesson_5.html' },
  { id: 6, title: 'Lesson 6', link: 'lesson/lesson_6.html' },
  { id: 7, title: 'Lesson 7', link: 'lesson/lesson_7.html' },
  { id: 8, title: 'Lesson 8', link: 'lesson/lesson_8.html' },
  { id: 9, title: 'Lesson 9', link: 'lesson/lesson_9.html' },
  { id: 10, title: 'Lesson 10', link: 'lesson/lesson_10.html' },
];

function LearningCard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Vocabulary Learning Lessons</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {lessons.map(lesson => (
          <div
            key={lesson.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => window.location.href = lesson.link}
          >
            <h2 className="text-lg font-semibold text-center">{lesson.title}</h2>
          </div>
        ))}
      </div>

      <div className="tutorial-section text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tutorial: Learning the Alphabet</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube video player"
          className="mx-auto"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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

export default LearningCard;