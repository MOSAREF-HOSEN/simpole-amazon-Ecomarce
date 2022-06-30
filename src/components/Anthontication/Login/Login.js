import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-96  shadow-xl'>
                <h2 className='text-center text-4xl'>Login</h2>
                <form className='card-body' onSubmit={handleUserSignIn}>
                    <div >
                        <label class="label">
                            <span class="label-text">Enter Your Email</span>

                        </label>

                        <input onBlur={handleEmailBlur} type="email" placeholder="Your Email" name="email" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="">

                        <label class="label">
                            <span class="label-text">Your password</span>
                            
                        </label>

                        <input onBlur={handlePasswordBlur} type="password" placeholder="Your password" class="input input-bordered w-full max-w-xs" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='btn btn-primary w-full max-w-xs' type="submit" value="Login" />
               
                    <p>
                    New to Ema-John? <Link className='form-link underline' to="/signup">Create an account</Link>
                </p>
                <div className="divider">OR</div>
                {/* google */}
                <button
                      
                        className="btn btn-outline btn-warning">Continue with Google</button>
               
               
                </form>
                
            </div>
        </div>
    );
};

export default Login;