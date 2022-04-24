import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Card from '../Card/Card';

const Orders = () => {
    const [products,setProducts] = useProducts()
    const [card,setCard] = useCart(products)
    return (
        <div className='shop-container'>
           <div className="prodacts-container">

           </div>
           <div className="card-container">
               <Card card={card}></Card>
           </div>
        </div>
    );
};

export default Orders;