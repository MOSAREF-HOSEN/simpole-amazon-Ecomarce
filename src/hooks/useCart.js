import { useEffect, useState } from "react"
import { getStordcart } from "../utilities/fakedb"

const useCart = ()=>{
    const [card,setCard] = useState([]);
    useEffect(()=>{
        const storedCart = getStordcart();
        console.log(storedCart);
        const savedCart = [];
        const keys = Object.keys(storedCart)
        fetch('http://localhost:5000/productBykeys',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(keys)
        })
        .then(res=>res.json())
        .then(products=>{
            // console.log(products);
            for(const id in storedCart){
                const addedProduct = products.find(product=>product._id === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
    
                }
            }
            setCard(savedCart);
        })
       
    },[])
    return [card,setCard];
}
export default useCart;