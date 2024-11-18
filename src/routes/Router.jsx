import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Home from "../pages/Home";
import About from "../components/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>}
    ]
  },
]);
export default router;
