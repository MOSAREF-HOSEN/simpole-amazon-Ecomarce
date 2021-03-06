import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {product,hendelRemoveProduct} = props
    const {img,name,price,shipping,quantity} = product
    return (
        <div className='review-item'>
           <div className='flex justify-center items-center mr-3'>
               <img src={img} alt="" />
           </div>
           <div className='review-detail-container'>
                <div className="review-detail">
                    <p className='product-name' title={name}>
                        {name.length>20 ? name.slice(0,20)+'...' : name}
                        </p>
                    <p>price<span className='color'>{price}</span></p>
                    <p><small>Shipping{shipping}</small></p>
                    <p><small>Quantity{quantity}</small></p>
                </div>
                <div className="delete-container flex justify-center items-center ">
                    <button onClick={()=>hendelRemoveProduct(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={ faTrashAlt}>

                        </FontAwesomeIcon>
                    </button>
                </div>
           </div>
        </div>
    );
};

export default ReviewItem;