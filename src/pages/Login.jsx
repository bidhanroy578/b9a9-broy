import { useContext } from 'react';
import map from '/map.svg'
import { AuthContext } from '../context/Authcontext';
import { Link, useLocation, useNavigate } from 'react-router';
import { passValidate } from '../utils/__utils__';
import { Helmet } from 'react-helmet';
const Login = () => {

    const { login, loginWithGoogle, } = useContext(AuthContext)
    let navigate = useNavigate()
    const location = useLocation()

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(data => {
                console.log(data.user)
                navigate(location.state || '/')
            }).catch(err => alert(err.message))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        let email = form.get('email')
        let password = form.get('password')
        console.log(email, password)
        if(password.length <6 ){return alert('password must be 6 characters long or more')}
        if(!passValidate(password)){return alert('password must contain at least one number , uppercase and lowercase letter')}
        // login with email and password
        login(email, password)
            .then(data => {
                navigate(location.state || '/')
                console.log(data)
            }).catch(err => alert(err.message))
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
                            <input name='email' type="email" className="input" placeholder="Email" required/>
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required/>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <div className="divider">or</div>
                        <button onClick={handleGoogleLogin} className='btn btn-md p-2 rounded-sm'>Login with Google</button>
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