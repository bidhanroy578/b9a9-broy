import { useContext, useState } from "react";
import { AuthContext } from "../context/Authcontext";
import profile from '/profile.svg'
import { BsEyeFill } from "react-icons/bs";
import { sendEmailVerification, updateEmail, updatePassword, updateProfile } from "firebase/auth";
import auth from "../utils/firebase/__config__";
import { passValidate } from "../utils/__utils__";


const UpdateProfile = () => {

    const [show, setShow] = useState(false)
    const { user , } = useContext(AuthContext)
    const usr = auth.currentUser

    function emailVerification() {
        sendEmailVerification(usr)
        .then(alert('Verification email sent successfully . Please check your email'))
        .catch(err => alert(err.message))
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
                .then(alert('Name updated'))
                .catch(err => alert(err.message))
        }
        if (email) {
            updateEmail(usr, email)
                .then(alert('Email updated'))
                .catch(err => alert(err.message))
        }
        if(passValidate(password)) {
            updatePassword(usr, password)
            .then(alert('Password updated'))
            .catch(err => alert(err.message))
        }
        if(photoURL) {
            updateProfile(usr , { photoURL: photoURL })
            .then(alert('Photo URL updated'))
            .catch(err => alert(err.message))
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
                <p>Photo URL : {user?.photoURL || 'Not Found'}</p>
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
        </div>
    );
};

export default UpdateProfile;