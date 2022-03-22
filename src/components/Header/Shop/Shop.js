import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products,setproducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))

    },[])

    const hendelclick =(product)=>{
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="prodacts-container">
               {
                   products.map(product=><Product
                     key={product.id}
                     product={product}
                     hendelclick={hendelclick}
                     ></Product>)
               }
            </div>
            <div className="card-container">
                <h4>samary</h4>
            </div>
        </div>
    );
};

export default Shop;