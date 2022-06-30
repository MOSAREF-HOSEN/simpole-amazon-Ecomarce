import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import shipment from '../../img/Amazon.png'
const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div className='md:flex h-screen justify-around items-center bg-warning'>
            <img className='img rounded-md' src={shipment} alt="" />
            <div className='card w-96  shadow-xl'>
                <h2 className='text-center text-primary font-serif text-4xl'>Your Shipping Info</h2>
                <form onSubmit={handleCreateUser} className='card-body'>
                    <div className="">
                    <span className="label-text">What is your name?</span>
                        <input className="input input-bordered w-full max-w-xs" onBlur={handleNameBlur} type="text" name="name" id="" required/>
                     
                    </div>
                    <div className="">
                        <label className="label-text">Your Email</label>
                        <input className="input input-bordered w-full max-w-xs" value={user?.email} readOnly type="email" name="email" id="" required/>
                    </div>
                    <div className="">
                        <label className="label-text">Address</label>
                        <input className="input input-bordered w-full max-w-xs" onBlur={handleAddressBlur} type="text" name="address" id=""  required/>
                    </div>
                    <div className="">
                        <label className="label-text">Phone Number</label>
                        <input className="input input-bordered w-full max-w-xs" onBlur={handlePhoneBlur} type="text" name="phone" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='btn btn-primary w-full max-w-xs' type="submit" value="Add Shipping"  required/>
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;