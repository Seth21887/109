import './product.css';
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react'; //useState function allows us to define an internal variable in a function
import StoreContext from "../context/storeContext";

// function Product(){
//     return(<div className='product'>

//     </div>);
// }

//Arrow function: this is sort of an anonymous function as it is not named, therefore we use a constant variable so something can be stored.

//in jsx files, the 'this' instruction may not work in normal functions, but they will always work in arrow functions.

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);
    let addProdToCart = useContext(StoreContext).addProdToCart; //this will give access to our context, and only to the addProdToCart function because that's all we need here.


    let onQuantityChange = (value) => { //onQuantityChange receives a value, then uses that value to update the quantity.
        //use the value to update the quantity
        setQuantity(value);
    };

    //add a function to return the total. Total = price*quantity
    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2); //the toFixed(2) function will restrict the number of numbers after the decimal point to two.
    };

    const addProduct = () => {
        console.log("adding product to cart", props.data.title);
        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        //prodForCart will be a copy of props.data but we will add quantity to it. Quantity shouldn't be added to props.data directly as that will mess things up.
        addProdToCart(prodForCart); //here we're calling a function thats in the global provider.
    }

    return(<div className='product'>
        <img className="productImage" src={'/img/' + props.data.image} alt="productImage"></img>
        <h2>{props.data.title}</h2>
        <div className="prices">
            <label className="price">Price: ${props.data.price.toFixed(2)}</label>
            <label className="total">Total: {getTotal()}</label>
        </div>
        <div className="controls">
            <QuantityPicker onChange={onQuantityChange} />
            <button onClick={addProduct} className="btnAdd btn btn-primary btn-sm">Add</button>
        </div>
    </div>);
};

export default Product;