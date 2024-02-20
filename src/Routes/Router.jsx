import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PriivateRoute from "./PriivateRoute";
 
const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/addproducts',
                element:<PriivateRoute><AddProduct></AddProduct></PriivateRoute>,
            },
            {
                path:'/signup',
                element:<Signup></Signup>,

            },
            {
                path:'/login',
                element:<Login></Login>,
            }
     
        ]
    }
])
export default router;