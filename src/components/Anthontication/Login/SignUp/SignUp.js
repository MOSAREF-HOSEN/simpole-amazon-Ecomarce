import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [conpassword,setConpassword] = useState('')
    const [ error,setError] = useState('')
    const hendeleEmail = e =>{
        setEmail(e.target.value)
    }
    const hendelePassword = e =>{
        setPassword(e.target.value)
    }
    const hendeleConpassword = e =>{
        setConpassword(e.target.value)
    }
    const handleCreateUser = e =>{
        e.preventDefault()
        if(password !== conpassword){
            setError('password mast be 6 carectars')
        }
    }
    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={hendeleEmail} type="email" name="email" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">password</label>
                    <input onBlur={hendelePassword} type="password" name="password" id="" required/>
                </div>
                <div className="input-group">
                        <label htmlFor="Confirm password">Confirm password</label>
                        <input onBlur={hendeleConpassword} type="password" name="Confirm password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>
                Already have an account? <Link className='form-link' to='/login'>Login</Link>

            </p>
        </div>
    </div>
    );
};

export default SignUp;