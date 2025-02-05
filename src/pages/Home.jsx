import { Outlet } from "react-router";
import Slider from "../components/home/Slider";
import Category from "../components/home/Category";
import Featured from "../components/home/Featured";
import Choose from "../components/home/Choose";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Category></Category>
            <Featured></Featured>
            <Choose></Choose>
            <Outlet></Outlet>
        </>
    );
};

export default Home;