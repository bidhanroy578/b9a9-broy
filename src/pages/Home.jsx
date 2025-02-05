import { Outlet } from "react-router";
import Slider from "../components/home/Slider";
import Category from "../components/home/Category";
import Latest from "../components/home/Latest";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Outlet></Outlet>
            <Category></Category>
            <Latest></Latest>
        </>
    );
};

export default Home;