import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home";
import Demo from "./routes/Demo";
import About from "./routes/About";
import { Outlet } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./routes/SignUp";
const AppLayout = () =>{

  return(
      <>
    {/* if we add a header*/}
    <Outlet/>
    {/* if we add a footer */}
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
   errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "sign-up",
        element: <SignUp/>,
      },
      {
        path: "demo",
        element: <Demo/>,
      }
    ]
  }
  
  
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);