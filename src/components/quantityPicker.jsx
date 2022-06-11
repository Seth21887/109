import './quantityPicker.css';
import {useState} from 'react';

const QuantityPicker = (props) => {

    let [quantity, setQuantity] = useState(1); //the first thing (quantity) is the way we can read the useState, the second thing (setQuantity) is a function reference.

        //props.onChange <---> onQuantityChange
    //props.onChange(10)<---> onQuantityChange(10)

    const handleDecrease = () => {
        let value = quantity;

        if (value>1)
            {
                value = value - 1;
                setQuantity(value)
            };
            props.onChange(value);
            
    };
    const handleIncrease = () => {
        // quantity = quantity + 1; //we can't use this syntax because then we can't use the word quantity later.
        let value = quantity;
        value = value + 1;
        setQuantity(value);
        props.onChange(value);

    };

    return (<div className='quantityPicker'>
        <button className="btnDecrease btn btn-primary btn-sm" onClick={handleDecrease}>-</button>
        <label className="quantityLabel">{quantity}</label>
        <button className="btnIncrease btn btn-primary btn-sm" onClick={handleIncrease}>+</button>
    </div>

    );
};

export default QuantityPicker;