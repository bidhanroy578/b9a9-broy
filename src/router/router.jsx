import { createBrowserRouter } from "react-router";
import App from './../App'
import Home from "../pages/Home";
import Error from "../Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error> ,
        children:[
            {
                path:'/' ,
                element:<Home></Home>
            }
        ]
    }
])