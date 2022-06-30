import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
        console.log('login');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='card w-96  shadow-xl'>
            <h2 className='text-center text-4xl'>Sign Up</h2>
                <form className='card-body' onSubmit={handleCreateUser}>
                    <div className="">

                        <span class="label-text">Enter Your Email</span>

                        <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="">
                        <span class="label-text">Your password</span>
                        <input onBlur={handlePasswordBlur} type="password" name="password" placeholder="Your password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="">
                        <span class="label-text">confirm-password</span>
                        <input onBlur={handleConfirmPasswordBlur} name="confirm-password" type="password" placeholder="confirm-password" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='btn btn-primary w-full max-w-xs' type="submit" value="SignUp" />
                    <p>
                        Already Have an account? <Link className='form-link underline' to="/login">Login</Link>
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

export default SignUp;