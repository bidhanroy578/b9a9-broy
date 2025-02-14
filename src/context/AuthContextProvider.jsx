import { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../utils/firebase/__config__';

const AuthContextProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    // login with google 
    const provider = new GoogleAuthProvider()
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    // creat a account with email and password 
    const signUp = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    // login with email and password 
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    // observer here to check if user is logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const data = { user, loading, signUp, login, loginWithGoogle,  }
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
