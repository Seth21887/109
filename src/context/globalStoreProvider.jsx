import StoreContext from "./storeContext";
import { useState } from 'react';

const GlobalStoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "admin", id: 42});

    const addProdToCart = (prod) => {
        console.log("Global add prod", prod);

        //for loop to travel cart: get every item -> compare the item_id with prod_id, if they match, increase the quantity on item

        let copy = [...cart];
        let found = false;
        for(let i=0; i<copy.length; i++){
            let item = copy[i];

            if(item._id == prod._id){
                found = true;
                // item.quantity == item.quantity + prod.quantity;
                item.quantity += prod.quantity;
            }
        }
        if(!found){
            copy.push(prod);
        }
        setCart(copy);
    };

    const removeProdFromCart = (_id) => {
        console.log("Global remove prod");

        let copy = [...cart];
        
        for(let i=0; i<copy.length;i++){
            if(copy[i]._id === _id){
                copy.splice(i, 1); //this means start at index i, and remove only 1 object.
            }
        }


        setCart(copy);
    }
    
    return(
        <div>
            <StoreContext.Provider value={{
                cart: cart, //the first cart is the name of the promise (from storeContext.js) and the second is the variable being used in the function.
                user: user,
                addProdToCart: addProdToCart,
                removeProdFromCart: removeProdFromCart,
            }}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
};

export default GlobalStoreProvider;