import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
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
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/myreview/:email',
                element:<Privet><MyReviews></MyReviews></Privet>,
                loader: async({params})=>{
                    return fetch(`http://localhost:5000/userReview/${params.email}`)
                 }
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>,
                loader: async()=>{
                   return fetch('http://localhost:5000/services')
                }
            },
            {
                path:'/service/:id',
                element:<Details></Details>,
                loader: async({params})=>{
                    return fetch(`http://localhost:5000/services/${params.id}`)
                 }
            },
        ]
    }
])
export default router