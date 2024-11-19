import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


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





    </div>
  );
}