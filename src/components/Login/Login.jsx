import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase.init';




export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const   { loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
  
    try {
      const res = await loginUser (email, password)
      .then(res=>{
        navigate('/')
      })// Await the loginUser  call
      console.log(res.user.email); // Log the response from the loginUser  function
      
     
    } catch (err) {
      console.error(err);
      setError('Login failed. Please check your credentials and try again.'); // Set error message
    }
  
  
  };
  const [isLoading, setIsLoading] = useState(false);
  const provider = new GoogleAuthProvider()
  const handleLogin = () => {
  
  signInWithPopup(auth,provider) 
   .then(res=>{
    navigate('/')
    console.log(res)
  })
    console.log("Google login clicked");
};

  
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg">
        
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4 text-center">
          <Link to="/register" className="text-blue-600 hover:underline">Don't have an account? Register</Link>
        </div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Login
        </button>
      </form>
      <br />
      <button 
      onClick={handleLogin} 
      className="flex items-center justify-center px-4 py-2 mx-auto bg-white shadow-2xl rounded-md transition duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Login with Google"
      disabled={isLoading} // Disable button while loading
    >
      {isLoading ? (
        <div className="loader"></div> // Optional loading spinner
      ) : (
        <>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" 
            alt="Google Logo" 
            className="h-8 mr-2"
          />
          <span className="text-gray-800 font-bold  text-xl">Login with Google</span>
        </>
      )}
    </button>

    </div>
  );
}