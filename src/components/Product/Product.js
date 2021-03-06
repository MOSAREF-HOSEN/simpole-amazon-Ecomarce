import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  

import React from 'react';
import './Product.css'


const Product = (props) => {
    // console.log(props);
    const {name,img,seller,ratings,price}= props.product
    // const {hendelAddToCart} = props
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name text-green-600'>{name}</p>
            <p>Pric:${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>rating: {ratings} stars</small></p>
           </div>
        <button onClick={()=> props.hendelAddTocart(props.product)} className='btn-card btn text-gray-800'>
               <p className='btn-text'>add to card</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;