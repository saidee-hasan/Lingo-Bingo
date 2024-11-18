// About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Mission</h1>
        <p className="text-lg text-gray-700 mb-6">
          At <strong>Your Language Learning Platform</strong>, our mission is to empower individuals to communicate across cultures and languages. We believe that learning a new language opens doors to new experiences, friendships, and opportunities. Our platform is designed to make language learning accessible, engaging, and effective for everyone, regardless of their background or skill level.
        </p>
        <h2 className="text-3xl font-semibold text-blue-500 mt-8 mb-4">How You Can Learn Vocabulary</h2>
        <p className="text-lg text-gray-700 mb-4">
          We offer a variety of innovative tools and methods to help you build and retain vocabulary:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li className="mb-2">🃏 <strong>Interactive Flashcards:</strong> Our digital flashcards utilize spaced repetition to help you memorize new words effectively.</li>
          <li className="mb-2">📚 <strong>Contextual Learning:</strong> Learn vocabulary in context with real-life scenarios and dialogues to understand usage better.</li>
          <li className="mb-2">🎮 <strong>Engaging Games:</strong> Participate in fun games that make learning vocabulary enjoyable and competitive.</li>
          <li className="mb-2">🏆 <strong>Daily Challenges:</strong> Join daily vocabulary challenges to keep your learning consistent and rewarding.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          Our goal is to create a supportive community where learners can thrive. Join us today and embark on your journey to mastering a new language!
        </p>
      </div>
    </div>
  );
};

export default About;