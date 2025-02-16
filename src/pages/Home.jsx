import { Outlet } from "react-router";
import Slider from "../components/home/Slider";
import Category from "../components/home/Category";
import Featured from "../components/home/Featured";
import Inquiry from "../components/home/Inquiry";
import Chooseslider from "../components/home/ChooseSlider";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Category></Category>
            <Featured></Featured>
            <Chooseslider></Chooseslider>
            <Inquiry></Inquiry>
            <Outlet></Outlet>
            <Helmet>
                <title>Luxury State</title>
            </Helmet>
        </>
    );
};

export default Home;