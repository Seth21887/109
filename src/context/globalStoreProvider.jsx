import StoreContext from "./storeContext";
import { useState } from 'react';

const GlobalStoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "admin", id: 42});

    const addProdToCart = (prod) => {
        console.log("Global add prod", prod);

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("Global remove prod");
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