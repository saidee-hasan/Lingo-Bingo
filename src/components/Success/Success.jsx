// Success.js
import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
  return (
    <div className="bg-blue-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Users</h2>
            <p className="text-4xl font-bold text-gray-800">
              <CountUp start={0} end={1200} duration={2.5} separator="," />
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Lessons</h2>
            <p className="text-4xl font-bold text-gray-800">
              <CountUp start={0} end={350} duration={2.5} separator="," />
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Vocabulary Words</h2>
            <p className="text-4xl font-bold text-gray-800">
              <CountUp start={0} end={5000} duration={2.5} separator="," />
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">Tutorials</h2>
            <p className="text-4xl font-bold text-gray-800">
              <CountUp start={0} end={75} duration={2.5} separator="," />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;