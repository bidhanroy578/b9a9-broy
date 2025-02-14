import { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import PropTypes from 'prop-types';
import { onAuthStateChanged } from "firebase/auth";
import auth from '../utils/firebase/__config__';

const AuthContextProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    // observer here to check if user is logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const data = {
        user,
        loading,

    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};
AuthContextProvider.propTypes = {
    children: PropTypes.node,

}
export default AuthContextProvider;
