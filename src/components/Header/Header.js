import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const [user] =  useAuthState(auth)
    const hendelSignout =()=>{
        signOut(auth)
    }
    return (
        <div>
           <nav className='header'>
               <img className='hidden lg:block' src={logo} alt="" />
               <div>
                   <Link className='uppercase' to="/shop">shop</Link>
                   <Link className='uppercase' to="/orders">orders</Link>
                   <Link className='uppercase' to="/inventory">inventory</Link>
                   <Link className='uppercase' to="/about">about</Link>
                   {
                       user
                       ?
                       <button className='uppercase outof'  onClick={hendelSignout}>SignOut</button>
                       :
                       <Link className='uppercase'  to="/login">Login</Link>
                   }
               </div>
           </nav>
        </div> 
    );
};

export default Header;