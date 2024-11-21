import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

function UserProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = () => {
    navigate('/');
  };

  if (!user) {
    return <p>User not found.</p>; // Handle case where user is null or undefined
  }

  return (
    <div className="max-w-md mx-auto p-4 pt-6 border p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.displayName}!</h1>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt={`Profile picture of ${user.displayName}`}
          className="w-24 h-24 rounded-full mb-4"
        />
      )}
      <p className="text-lg mb-2">Email: {user.email}</p>
      <p className="text-lg mb-4">Name: {user.displayName}</p>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Profile
      </button>
    </div>
  );
}

export default UserProfile;