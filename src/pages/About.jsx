import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="min-h-[70vh] ">
            <h3 className="text-center font-medium leading-36 text-4xl"> This is for about page here ...</h3>
            <Helmet>
                <title>About</title>
            </Helmet>
        </div>
    );
};

export default About;