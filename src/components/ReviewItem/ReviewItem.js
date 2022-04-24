import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({product}) => {
    const {img,name,price,shipping,quantity} = product
    return (
        <div className='review-item'>
           <div>
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
                <div className="delete-container">
                    <button>delete</button>
                </div>
           </div>
        </div>
    );
};

export default ReviewItem;