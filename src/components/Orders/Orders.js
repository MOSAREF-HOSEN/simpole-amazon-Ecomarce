import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products,setProducts] = useProducts()
    const [card,setCard] = useCart(products)
    const navigate = useNavigate()
    const hendelRemoveProduct = (product)=>{
        const rest = card.filter(pd=>pd.id !== product.id)
        setCard(rest)
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
           <div className="review-container">
            {
                card.map(product=> <ReviewItem
                key={product.id}
                product={product}
                hendelRemoveProduct={hendelRemoveProduct}
                ></ReviewItem>)
            }
           </div>
           <div className="card-container">
               <Card card={card}>
                  <button onClick={()=>navigate('/shipment')}>procsed chace out</button>
               </Card>
           </div>
        </div>
    );
};

export default Orders;