import { createBrowserRouter } from "react-router";
import App from './../App'
import Home from "../pages/Home";
import Error from "../Error";
import Details from "../pages/Details";
import Featured from "../components/home/Featured";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/UpdateProfile";

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
                element: <PrivateRouter>
                    <Featured></Featured>
                </PrivateRouter>
            },
            {
                path: '/detail/:id',
                element: <PrivateRouter>
                    <Details></Details>
                </PrivateRouter>,
                loader: () => fetch('/featured.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/update-profile',
                element: <PrivateRouter>
                    <UpdateProfile></UpdateProfile>
                </PrivateRouter>
            }
        ]
    }
])