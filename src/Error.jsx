import { Link, useNavigate } from "react-router";
import Nav from "./components/Nav";

const Error = () => {
    const navigate = useNavigate()
    return (
        <>
            <Nav></Nav>
            <h3 className="text-center font-bold text-2xl">Page Not Found . <Link onClick={()=> navigate(-1)} className="text-red-500">go to previous page...</Link></h3>
        </>
    );
};

export default Error;