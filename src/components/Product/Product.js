import React from 'react';
import './Product.css'
const Product = (props) => {

    const {name,img,seller,ratings}= props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
        </div>
    );
};

export default Product;