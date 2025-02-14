import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user , loading} = useContext(AuthContext)
    if(loading){
        return <div className="h-[70vh] text-center"><p>loading data ....</p><span className="loading loading-spinner loading-lg"></span></div>
    }
    else if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children
};

PrivateRouter.propTypes = {
    children: PropTypes.node
}
export default PrivateRouter;