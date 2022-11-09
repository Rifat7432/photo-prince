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
import ShoeReview from "./Share/ShoeReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addservices",
        element: <Privet><AddServices></AddServices></Privet>,
      },
      {
        path: "/myreview/:email",
        element: (
          <Privet>
            <MyReviews></MyReviews>
          </Privet>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allservices",
        element: <AllServices></AllServices>,
        loader: async () => {
          return fetch(
            "https://assignment-11-server-rifat7432.vercel.app/services"
          );
        },
      },
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
