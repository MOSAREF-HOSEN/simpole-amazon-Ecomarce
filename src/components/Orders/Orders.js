import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products,setProducts] = useProducts()
    const [card,setCard] = useCart(products)
    return (
        <div className='shop-container'>
           <div className="review-container">
            {
                card.map(product=> <ReviewItem
                key={product.id}
                product={product}
                ></ReviewItem>)
            }
           </div>
           <div className="card-container">
               <Card card={card}></Card>
           </div>
        </div>
    );
};

export default Orders;