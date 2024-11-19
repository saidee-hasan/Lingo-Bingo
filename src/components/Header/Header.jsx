import React, { useContext, useState } from 'react';
import Success from '../Success/Success';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Header = () => {
const {user, signOutUser }= useContext(AuthContext);
const handleSignOut =()=>{
  signOutUser()
  .then(()=>{
    console.log("signout sucessyfully")
  })
}

console.log(user?.photoURL)
  return (
    <div className="navbar bg-gray-300 fixed z-50">
      

  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a href='/about'>About</a></li>
       
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

    <li><a href='/'>Home</a></li>

    <li><a href='/'>Start-learning</a></li>
    <li><a href='/about'>About</a></li>
      
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?<><p onClick={handleSignOut}>Sign Out</p></>: <Link to={'/login'}> <button className='bg-green-50 p-2 rounded-md'> Login</button></Link>
    }
   
   
 
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Link to={'/profile'}> <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} /></Link>
         
        </div>
      </div>
      
    </div>

  </div>

</div>
  );
};

export default Header