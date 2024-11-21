import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider'; // Adjust the import based on your project structure
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase.init'; // Adjust the import based on your project structure

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (event) => {
    event.preventDefault();
    setError('');

    try {
      await updateProfile(auth.currentUser , {
        displayName: name,
        photoURL: photoURL,
      });
      // Optionally, you can also update the user's information in your database here

      // Navigate back to the My Profile route
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
      {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">Photo URL:</label>
          <input
            type="text"
            id="photoURL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;