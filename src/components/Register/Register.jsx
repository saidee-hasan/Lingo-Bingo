import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase.init';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

export default function Register() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { createUser  } = useContext(AuthContext);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/; // At least one lowercase, one uppercase, and minimum 6 characters
    return regex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Validate password
    if (!validatePassword(password)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
      setLoading(false);
      return;
    }

    try {
      await createUser (email, password, username, photoURL)
        .then(res => {
          if (res) {
            handleToast('User  registered successfully');
          } else {
            // Handle error if needed
          }
        });

      const profile = {
        displayName: username,
        photoURL: photoURL,
      };

      await updateProfile(auth.currentUser , profile);
      console.log('User  registered successfully');
      navigate('/'); // Redirect to login or another page
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
      handleToast('User  registered unsuccessfully');
    } finally {
      setLoading(false);
    }
  };

  const handleToast = (name) => {
    toast(`${name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="max-w-md mx-auto p-6 border-2 border-teal-500 rounded-lg py-10">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-blue-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <Link to={'/login'} className="text-blue-600 hover:underline">Already have an account? Login</Link>
        <button 
          type="submit" 
          disabled={loading}
          className={`w-full py-2 ${loading ? 'bg-gray-400' : 'bg-blue-600'} text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <br />
      
      <button
        onClick={handleLogin}
        className="flex items-center justify-center px-4 py-2 mx-auto bg-white shadow-2xl rounded-md transition duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Login with Google"
      
      >
      
          <>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
              alt="Google Logo"
              className="h-8 mr-2"
            />
            <span className="text-gray-800 font-bold  text-xl">
              Login with Google
            </span>
          </>
   
      </button>
    </div>
  );
}