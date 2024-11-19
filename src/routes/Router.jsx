import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Home from "../pages/Home";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserProfile from "../pages/UserProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/profile",element:<UserProfile/>},
      {path:"/register",element:<Register/>},
      {path:"/about",element:<About/>}
    ]
  },
]);
export default router;
