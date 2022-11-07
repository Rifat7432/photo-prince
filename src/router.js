import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Details from "./Pages/Details/Details";
import AllServices from "./Pages/Home/AllServices";
import Home from "./Pages/Home/Home";

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