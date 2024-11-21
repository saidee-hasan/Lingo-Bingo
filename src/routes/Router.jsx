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
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Tutorial from "../components/Tutorial/Tutorial";


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
      {path:"/forgot",element:  <ForgotPassword/>},
      {path:"/update",element:<PrivateRoute><UpdateProfile/></PrivateRoute>  },
      {path:"/tutorial",element:<PrivateRoute><Tutorial/></PrivateRoute> },
      {
        path: "/lessons/:id/", // This is the correct way to define the child route
        element:<PrivateRoute><Card /></PrivateRoute> ,
        loader:()=> fetch("../vocabulary.json")
      },
      {path:"/lessons/",element:<PrivateRoute><StartLearning/></PrivateRoute>,loader:()=> fetch("../categories.json"),},
      { path: "*", element: <ErrorPage /> }
    ]
  },
]);
export default router;
