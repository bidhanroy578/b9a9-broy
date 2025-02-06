import { createBrowserRouter } from "react-router";
import App from './../App'
import Home from "../pages/Home";
import Error from "../Error";
import Details from "../pages/Details";
import Featured from "../components/home/Featured";

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
            }
        ]
    }
])