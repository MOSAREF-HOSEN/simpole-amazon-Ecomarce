import React from 'react';
import './Card.css'
const Card = (props) => {
    const { card } = props
    // console.log(card);
    let total = 0
    let shipping = 0;
    let quantity = 0;
    for (const product of card) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <p
                className='text-xl text-gray text-green-600'
            >
               Please Order new
            </p>
            <p className='text-gray-800 font-semibold '>Item: {quantity}</p>
            <p className='text-gray-800 font-semibold '> price: ${total}</p>
            <p className='text-gray-800 font-semibold '>shipping: ${shipping}</p>
            <p className='text-gray-800 font-semibold '>tax: {tax}</p>
            <h5 className='text-gray-800 font-semibold '>Total: {grandTotal.toFixed(2)}</h5>
            <div className="divider"></div>
            {props.children}

        </div>
    );
};

export default Card;