import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import AddServices from "./Pages/AddServices/AddServices";
import Blog from "./Pages/Blog/Blog";
import Details from "./Pages/Details/Details";
import AllServices from "./Pages/Home/AllServices";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginSignup/Login";
import SignUp from "./Pages/LoginSignup/SignUp";
import MyReviews from "./Pages/MyReviews/MyReviews";
import Privet from "./Share/Privet";

// creating router

const router = createBrowserRouter([
  //Main  layout
  {
    path: "/",
    element: <Main></Main>,
    children: [
      //Home route
      {
        path: "/",
        element: <Home></Home>,
      },
      //Blog route
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      //Login route
      {
        path: "/login",
        element: <Login></Login>,
      },
      //AddServices Privet route
      {
        path: "/addservices",
        element: (
          <Privet>
            <AddServices></AddServices>
          </Privet>
        ),
      },
      //MyReviews Privet route
      {
        path: "/myreview/:email",
        element: (
          <Privet>
            <MyReviews></MyReviews>
          </Privet>
        ),
      },
      //Details route
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      //Details route
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
        loader: async () => {
          return fetch(
            "https://assignment-11-server-rifat7432.vercel.app/services"
          );
        },
      },
      //Details route
      {
        path: "/service/:id",
        element: <Details></Details>,
        loader: async ({ params }) => {
          return fetch(
            `https://assignment-11-server-rifat7432.vercel.app/services/${params.id}`
          );
        },
      },
    ],
  },
]);
export default router;
