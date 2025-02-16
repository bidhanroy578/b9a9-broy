import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/Authcontext";
import { updateProfile } from "firebase/auth";
import auth from "../utils/firebase/__config__";
import map from '/map.svg'
import { passValidate } from "../utils/__utils__";
import { Helmet } from "react-helmet";
import { BsEyeFill } from "react-icons/bs";
import { errorToast } from "../utils/toast";

const SignUp = () => {


    const { loginWithGithub, loginWithGoogle, signUp } = useContext(AuthContext)
    let navigate = useNavigate()
    const location = useLocation()
    const [show , setShow] = useState(false)

    // login with github
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(() => {
                navigate(location.state || '/')
            }).catch(err => errorToast(err.message))
    }
    // login with google gmail
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                navigate(location.state || '/')
            }).catch(err => errorToast(err.message))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        let email = form.get('email')
        let name = form.get('name')
        let password = form.get('password')

        // check if password is valid or not 
        if (password.length < 6) { return errorToast('password must be 6 characters long or more') }
        if (!passValidate(password)) { return errorToast('password must contain at least one number , uppercase and lowercase letter') }
        // create a new account with email and password
        signUp(email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(alert('profile created'))
                    .catch(err => errorToast(err.message))
                navigate(location.state || '/')
            }).catch(err => errorToast(err.message))
    }
    return (
        <div className='hero min-h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${map})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center bg-white/50 shadow-2xl rounded-md p-4 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up to Explore Exclusive Properties</h1>
                    <p className="py-6">
                        Discover homes as unique as you are. Log in to access personalized recommendations, VIP property tours, and priority listings curated just for you. Luxury living starts here.
                    </p>
                </div>
                <div className="card bg-white/50 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} name='login' className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" required />
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />
                            <label className="fieldset-label">Password</label>
                            <span className="relative ">
                                <input name='password' type={show ? "text" : "password"} className="input pr-8" placeholder="Password" />
                                <BsEyeFill onClick={() => setShow(!show)} className="absolute text-lg top-1/4 right-2"></BsEyeFill>
                            </span>
                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </form>
                        <div className="divider">or</div>
                        <button onClick={handleGoogleLogin} className='btn btn-md p-2 rounded-sm'>Login with Google</button>
                        <button onClick={handleGithubLogin} className='btn btn-md p-2 rounded-sm'>Login with Github</button>
                        <p>Already have an account ? <Link to={'/login'} className='text-yellow-400 link link-hover'>Please Login</Link></p>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>SignUp</title>
            </Helmet>
        </div>
    );
};

export default SignUp;