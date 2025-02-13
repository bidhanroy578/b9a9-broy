
const About = () => {
    return (
        <div className="min-h-[70vh] ">
            <h3 className="text-center font-medium leading-36 text-4xl"> This is for about page here ...</h3>
            <p>for testing env varriable . {console.log(import.meta.env.VITE_SOME_KEY)}</p>
        </div>
    );
};

export default About;