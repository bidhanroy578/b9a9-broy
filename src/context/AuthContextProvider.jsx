import { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../utils/firebase/__config__';

const AuthContextProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);
    
    const githubProvider = new GithubAuthProvider()
    const loginWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const googleProvider = new GoogleAuthProvider()
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signUp = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const data = { user, loading, signUp, login, loginWithGithub, loginWithGoogle, logout, }
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
