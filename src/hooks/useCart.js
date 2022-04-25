import { useEffect, useState } from "react"
import { getStordcart } from "../utilities/fakedb"

const useCart = (products)=>{
    const [card,setCard] = useState([]);
    useEffect(()=>{
        const storedCart = getStordcart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }
        }
        setCard(savedCart);
    },[products])
    return [card,setCard];
}
export default useCart;