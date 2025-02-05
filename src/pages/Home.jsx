import { Outlet } from "react-router";
import Slider from "../components/home/Slider";
import Category from "../components/home/Category";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Outlet></Outlet>
            <Category></Category>
        </>
    );
};

export default Home;