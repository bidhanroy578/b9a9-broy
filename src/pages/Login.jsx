import { useContext, useState } from 'react';
import map from '/map.svg'
import { AuthContext } from '../context/Authcontext';
import { Link, useLocation, useNavigate } from 'react-router';
import { passValidate } from '../utils/__utils__';
import { Helmet } from 'react-helmet';
import { BsEyeFill } from 'react-icons/bs';
import { errorToast } from '../utils/toast';
const Login = () => {

    const { login, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    let navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)

    const handleGithubLogin = () => {
        loginWithGithub()
            .then(navigate(location.state || '/'))
            .catch(err => errorToast(err.message))
    }
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
        let password = form.get('password')
        if (password.length < 6) { return errorToast('password must be 6 characters long or more') }
        if (!passValidate(password)) { return errorToast('password must contain at least one number , uppercase and lowercase letter') }
        login(email, password)
            .then(() => {
                navigate(location.state || '/')
            }).catch(err => errorToast(err.message))
    }
    return (
        <div className='hero min-h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${map})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center bg-white/50 shadow-2xl rounded-md p-4 lg:text-left">
                    <h1 className="text-5xl font-bold">Login to Explore Exclusive Properties</h1>
                    <p className="py-6">
                        Discover homes as unique as you are. Log in to access personalized recommendations, VIP property tours, and priority listings curated just for you. Luxury living starts here.
                    </p>
                </div>
                <div className="card bg-white/50 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} name='login' className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required />
                            <label className="fieldset-label">Password</label>
                            <span className="relative ">
                                <input name='password' type={show ? "text" : "password"} className="input pr-8" placeholder="Password" />
                                <BsEyeFill onClick={() => setShow(!show)} className="absolute text-lg top-1/4 right-2"></BsEyeFill>
                            </span>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-md mt-4">Login</button>
                        </form>
                        <div className="divider">or</div>
                        <button onClick={handleGoogleLogin} className='btn btn-md p-2 rounded-sm'>Login with Google</button>
                        <button onClick={handleGithubLogin} className='btn btn-md p-2 rounded-sm'>Login with Github</button>
                        <p>New here ? <Link to={'/signup'} className='text-yellow-400 link link-hover'>Please Sign Up</Link></p>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Login</title>
            </Helmet>
        </div>
    );
};

export default Login;