import { createBrowserRouter } from "react-router";
import App from './../App'
import Home from "../pages/Home";
import Error from "../Error";
import Details from "../pages/Details";
import Featured from "../components/home/Featured";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:catg',
                element:<Featured></Featured>
            },
            {
                path: '/detail/:id',
                element: <Details></Details>,
                loader: () => fetch('/featured.json')
            } ,
            {
                path:'/about' ,
                element: <About></About>
            },
            {
                path: '/contact', 
                element: <Contact></Contact>
            }
        ]
    }
])