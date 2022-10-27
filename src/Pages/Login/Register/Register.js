import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.config';
import Loading from '../../../Loading/Loading';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react'
import register from '../../../assets/register.json'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        loading,
        user,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    let errorElement;

    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (loading || Gloading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home')
    }



    if (user || Guser) {
        navigate(from, { replace: true });
    }
    if (error || Gerror) {
        errorElement = <p className='text-danger'>Error: {error?.message}{Gerror.message}</p>
    }
    return (
        <div>

            <div>
                <div className="hero min-h-screen bg-base-200">

                    <div className="hero-content flex-col lg:flex-row-reverse mx-auto">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold pb-4">Register now!</h1>
                            <div>
                                <div className='h-full w-full'>
                                    <Lottie animationData={register} loop={true} />
                                </div>
                              
                            </div>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body pb-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                    <label className="label">
                                        <h1>Have An Account ? <span className='text-violet-500 font-semibold'> <Link to='/login'>Click to Login</Link> </span> </h1>
                                    </label>
                                </div>
                                <div className="text-red-500 my-1">
                                    {errorElement}
                                </div>
                                <div className="form-control mb-0">
                                    <button className="btn btn-primary">Register</button>
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

export default Register;