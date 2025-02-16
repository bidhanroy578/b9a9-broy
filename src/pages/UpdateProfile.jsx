import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import profile from '/profile.svg'
import { BsEyeFill } from "react-icons/bs";
import { sendEmailVerification, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import auth from "../utils/firebase/__config__";
import { passValidate } from "../utils/__utils__";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import { errorToast, successToast } from "../utils/toast";


const UpdateProfile = () => {

    const [show, setShow] = useState(false)
    const { user, } = useContext(AuthContext)
    const usr = auth.currentUser

    function emailVerification() {
        sendEmailVerification(usr)
            .then(successToast('Verification email sent successfully . Please check your email'))
            .catch(err => errorToast(err.message))
    }
    function handleSubmit(e) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoURL = form.get('photoURL')
        console.log(name, email, password, photoURL)
        // update user profile
        if (name) {
            updateProfile(usr, { displayName: name })
                .then(successToast('Name updated'), e.target.reset())
                .catch(err => errorToast(err.message))
        }
        if (email) {
            updateEmail(usr, email)
                .then(successToast('Email updated'), e.target.reset())
                .catch(err => errorToast(err.message))
        }
        if (passValidate(password)) {
            updatePassword(usr, password)
                .then(successToast('Password updated'), e.target.reset())
                .catch(err => errorToast(err.message))
        }
        if (password) {
            if (!passValidate(password)) {
                errorToast('Password must contain at least one small,capital,number charecter ')
            }
        }
        if (photoURL) {
            updateProfile(usr, { photoURL: photoURL })
                .then(successToast('Photo URL updated'), e.target.reset())
                .catch(err => errorToast(err.message))
        }

    }

    return (
        <div className="mt-8">
            <div className="avatar flex justify-center">
                <div className="mask mask-squircle w-32">
                    {
                        user?.photoURL ?
                            <img src={user.photoURL} />
                            :
                            <img src={profile} className="bg-slate-200 object-cover" />
                    }
                </div>
            </div>
            <div className="max-w-xs m-auto my-4">
                <p>Full Name : {user?.displayName || 'Not Found'}</p>
                <p>Email : {user?.email || 'Not Found'}</p>
                <p className="text-ellipsis whitespace-nowrap cursor-pointer hover:whitespace-normal max-w-xs overflow-hidden">Photo URL : <span>{user?.photoURL || 'Not Found'}</span></p>
                <p>Email Verified Status : {user?.emailVerified ? 'Verified' : 'Not Verified'} {user.emailVerified || <span onClick={emailVerification} className="link link-hover text-red-600">Verify Email</span>}</p>
            </div>
            <form onSubmit={handleSubmit} name='login' className="fieldset max-w-xs mx-auto">
                <label className="fieldset-label">Name</label>
                <input name='name' type="text" className="input" placeholder="Name" />
                <label className="fieldset-label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <span className="relative ">
                    <input name='password' type={show ? "text" : "password"} className="input pr-8" placeholder="Password" />
                    <BsEyeFill onClick={() => setShow(!show)} className="absolute text-lg top-1/4 right-2"></BsEyeFill>
                </span>
                <label className="fieldset-label">Image URL</label>
                <input name='photoURL' type="text" className="input" placeholder="Photo URL" />
                <button className="btn btn-neutral mt-4">Update Profile</button>
            </form>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;