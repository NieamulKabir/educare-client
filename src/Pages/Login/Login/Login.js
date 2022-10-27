import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.config';
import Loading from '../../../Loading/Loading';
import Lottie from 'lottie-react'
import login from '../../../assets/login.json'

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    if (loading || Gloading || sending) {
        return <Loading></Loading>
    }


    if (user || Guser) {

        navigate(from, { replace: true });
    }

    if (error || Gerror) {
        errorElement = <p className='text-danger'>Error: {error?.message}{Gerror.message}</p>
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        toast.success('Successfully Login')
    }


    // const resetPassword = async () => {
    //     const email = emailRef.current.value;
    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast.success('Sent email');
    //     }
    //     else {
    //         toast('please enter your email address');
    //     }
    // }


    return (
        <div>
            <div>
                <div className="hero min-h-screen w-full bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <div className='h-full w-full'>
                                    <Lottie animationData={login} loop={true} />
                                </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    {/* <label className="label">
                                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                                    </label> */}

                                </div>
                                <div className="text-red-500 py-1">
                                    {errorElement}
                                </div>
                                <label className="label">
                                    <h1>Need Account? <span className='text-violet-500 font-semibold'> <Link to='/register'>Click to Register</Link> </span></h1>
                                </label>
                                <div className="form-control ">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="divider mx-6 mt-0">OR</div>
                            <button
                                onClick={async () => {
                                    await signInWithGoogle();
                                    toast.success('Successfully log in With Google')
                                }}
                                className="btn w-[80%] mx-auto mb-10"><FaGoogle className='mr-2 text-2xl' ></FaGoogle>Google Signin</button>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;