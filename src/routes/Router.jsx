import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Home from "../pages/Home";
import About from "../components/About/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UserProfile from "../pages/UserProfile";
import StartLearning from "../pages/StartLearning";
import PrivateRoute from "./PrivateRoute";
import Card from "../components/Card/Card";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {path:"/",element:<Home/>},
      {path:"/login",element:<Login/>},
      {path:"/profile",element:<PrivateRoute><UserProfile/></PrivateRoute>  },
      {path:"/register",element:<Register/>},
      {path:"/about",element:<About/>},
      {path:"/forgot",element:<ForgotPassword/>},
      {path:"/update",element:<UpdateProfile/>},
      {
        path: "/lessons/:id/", // This is the correct way to define the child route
        element:<PrivateRoute><Card /></PrivateRoute> ,
        loader:()=> fetch("../vocabulary.json")
      },
      {path:"/lessons/",element:<PrivateRoute><StartLearning/></PrivateRoute>,loader:()=> fetch("../categories.json"),
      



      }
    ]
  },
]);
export default router;
