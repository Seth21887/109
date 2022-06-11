import "./cart.css";
import { useContext } from 'react';
import StoreContext from "../context/storeContext";
import ProductInCart from "./ProductInCart";

const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getTotal = () => {
        let total = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            total += prod.price*prod.quantity;
        }

        return total.toFixed(2);
    }

    const getNumItems = () => {
        let total = 0;
        for(let i=0; i<cart.length; i++){
            let prod = cart[i];
            total += prod.quantity;
        }
        return total;
    }

    return (
        <div className="cart">
            <h6>Currently you have {getNumItems()} products in your cart.</h6>
            <h3>Are you ready to place the order?</h3>
            <hr />

            <div className="parent">
                <div className="products">
                    {cart.map((prod) => (
                        <ProductInCart key={prod._id} data={prod}></ProductInCart>
                    
                    ))}
                </div>
                <div className="total-panel">
                    <h3>Your total:</h3>
                    <h2>${getTotal()}</h2>
                    <button>Pay Now</button>
                </div>
            </div>
        </div>
    )
};

export default Cart;