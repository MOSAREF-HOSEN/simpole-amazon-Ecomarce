import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import { addToDb, getStordcart } from '../../../utilities/fakedb';
import Card from '../../Card/Card';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useProducts()
    const [cart, setCart] = useState([]);
     
     

    useEffect(()=>{
        // console.log('localst',products);
        const savedCart = []
        const storedCart = getStordcart()
        // console.log(storedCart);
        for(const id in storedCart){
            const addProduct = products.find(product =>product.id ===id)
            if(addProduct){
                const quantity = storedCart[id]
                addProduct.quantity = quantity
                savedCart.push(addProduct)
            }
             
        }
        setCart(savedCart)
        // console.log('localstoresfece');
    },[products])

    const hendelAddTocart=(selecetedproduct)=>{
        // console.log(selecetedproduct);
        let newCart = []
        const existe = cart.find(prodact => prodact.id === selecetedproduct.id)
        if(!existe){
            selecetedproduct.quantity = 1
            newCart = [...cart, selecetedproduct]
        }else{
            const rest = cart.filter(product=>product.id !== selecetedproduct.id)
            existe.quantity = existe.quantity +1
            newCart = [...rest,existe]
        }
        
       
        setCart(newCart)
        addToDb(selecetedproduct.id)
       
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
              <Card card={cart}>
                <Link to='/orders'>
                    <button>Review Order</button>
                </Link>
              </Card>
            </div>
        </div>
    );
};

export default Shop;