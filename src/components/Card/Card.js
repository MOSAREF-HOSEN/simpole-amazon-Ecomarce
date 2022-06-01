import React from 'react';
import './Card.css'
const Card = (props) => {
        const {card} = props
    console.log(card);
        let total  = 0
        let shipping = 0;
        let quantity = 0;
        for(const product of card){
            quantity = quantity + product.quantity
            total = total + product.price * product.quantity;
            shipping = shipping +product.shipping;
        }
        const tax = parseFloat((total * 0.1).toFixed(2))
      const  grandTotal = total + shipping + tax
    return (
        <div className='cart'>
              <h4>Order new</h4>
                <p>Item: {quantity}</p>
                <p> price: ${total}</p>
                <p>shipping: ${shipping}</p>
                <p>tax: {tax}</p>
                <h5>Total: {grandTotal.toFixed(2)}</h5>
                {props.children}
        </div>
    );
};

export default Card;