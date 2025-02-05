import { Outlet } from "react-router";
import Slider from "../components/home/Slider";
import Category from "../components/home/Category";
import Featured from "../components/home/Featured";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Category></Category>
            <Featured></Featured>
            <Outlet></Outlet>
        </>
    );
};

export default Home;