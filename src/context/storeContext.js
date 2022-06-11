import { createContext } from 'react';


// Context: describe the global data
// will describe the data structure
// promise: describes what will be stored (below function)
// provider: on globalStoreProvider.jsx
// actual values:
// WILL NOT HOLD ANY IMPLEMENTATION

let StoreContext = createContext({
    cart: [], //this is an immutable array, separate functions should be created to adjust the cart
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {}
});

export default StoreContext;