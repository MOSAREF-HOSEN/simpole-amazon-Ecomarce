import React from 'react';
import './Product.css'
const Product = (props) => {
   
    
    const {name,img,seller,ratings,price}= props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info">
           <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>ratings: {ratings} stars</small></p>
           </div>
           <button onClick={()=> props.hendelclick(props.product)} className='btn-card'>
               <p>add to card</p>
           </button>
        </div>
    );
};

export default Product;