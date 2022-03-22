import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setproducts] = useState([])
    const [cart, setCart] = useState([]);
     
     useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
     .then(data=>setproducts(data))

    },[])

    const hendelAddTocart=(product)=>{
        console.log(product);
        const newcart = [...cart, product]
        setCart(newcart)
    }

    return (
        <div className='shop-container'>
            <div className="prodacts-container">
               {
                   products.map(product=><Product
                     key={product.id}
                     product={product}
                    hendelAddTocart={hendelAddTocart}
                     ></Product>)
               }
            </div>
            <div className="card-container">
                <h4>samary</h4>
                <p>sicleted: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;