import React, { useState } from 'react';

const UserFeedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the feedback submission, e.g., sending it to a server
    console.log({ name, email, feedback });
    setSubmitted(true);
    // Reset form fields
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className='bg-gray-50'>
    <div className="p-6 max-w-lg mx-auto  rounded-lg py-10 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800">User  Feedback</h2>
      {submitted ? (
        <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
            Submit Feedback
          </button>
        </form>
      )}
    </div></div>
  );
};

export default UserFeedback;