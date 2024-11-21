import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth/cordova';
import { auth } from '../../../firebase.init';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export default function Register() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL,setPhotoURL]=useState('')
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {createUser,}  = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createUser (email, password, username,photoURL)
      .then(res=>{
        if(res){
          handleToast('User  registered successfully')
        }else{
        
        }
   
      })
      const profile = {
        displayName : username,
        photoURL:photoURL,
      }
    await   updateProfile(auth.currentUser, profile);
      console.log('User  registered successfully');
     
      

      navigate('/'); // Redirect to login or another page
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
      handleToast('User  registered Unccessfully')
    
    } finally {
      setLoading(false);
    }
  };



const handleToast=(name)=>{
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
}



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
transition: Bounce
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

    </div>
  );
}