import './admin.css';
import { useState } from 'react';


const Admin = () => {
    const [product, setProduct] = useState({}); //when you use useState hook, you have to provide an initial value. Product will be an object, so an empty object starting point will be {}
    const [allProducts, setAllProducts] = useState([]);
    //state variables are immutable, will not change
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const saveProduct = () => {
        console.log("Saving product", product);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    };

    const textChanged = (e) => { //e here stands for event
        let name = e.target.name;
        let val = e.target.value;

        //****This notation will not work because when working with objects, if we modify the copy, it will immediately modify product, and we are breaking the immutability rule. */
        // let copy = product;
        // copy[name] = val;
        // setProduct(copy);

        let copy = {...product}; //doing this ensures that copy is a new object. ... is the spread operator and will take everything that exists in product and catches them in copy.
        copy[name] = val;
        setProduct(copy);

        //To Do: send the product to service --> to back end.
    };

    const couponChanged = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        let copy = {...coupon};
        copy[name] = val;
        setCoupon(copy);
    };

    const saveCoupon = () => {
        console.log("Saving coupon", coupon);

        //add the coupon to allCoupons array
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);

        //To Do: send the coupon to service --> back end.

    };
    
    return (
        <div className="admin-page">
            <h4>Store Administration</h4>

            <div className="content">
                <section className="products">
                    <h5>Register New Product</h5>
                    <div className="field">
                        <label>Title</label>
                        <input name="title" onChange={textChanged} className="form-control" type="text" />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <input name="category" onChange={textChanged} className="form-control" type="text" />
                    </div>
                    <div className="field">
                        <label>Image</label>
                        <input name="image" onChange={textChanged} className="form-control" type="text" />
                    </div>
                    <div className="field">
                        <label>Price</label>
                        <input name="price" onChange={textChanged} className="form-control" type="text" />
                    </div>
                    <div className="field">
                        <button onClick={saveProduct} className="btn btn-primary">Register Product</button>
                    </div>
                    <hr />

                    <ul>
                        {allProducts.map((p, index) => <li key={index}>{p.title} - {p.price}</li>)}
                    </ul>
                    
                </section>
                <section className="coupons">
                    <h5>Coupon Codes</h5>
                    <div className="field">
                        <label>Coupon Code</label>
                        <input name="code" onChange={couponChanged} className="form-control" type="text" />
                    </div>
                    <div className="field">
                        <label>Discount </label>
                        <input name="discount" onChange={couponChanged} className="form-control" type="text" />
                    </div>
                    <div className="field">
                        <button onClick={saveCoupon} className="btn btn-primary">Confirm Coupon</button>
                    </div>

                    <hr />
                    <ul>
                        {allCoupons.map(c => <li key={c.code}>{c.code} - {c.discount}</li>)}
                    </ul>
                </section>
            </div>
        </div>
    )
};

export default Admin;