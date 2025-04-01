
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
 

function Page({ items, cart, SetCart }) {
    const addTocart = (id, price, title, description, imgSrc) => {
        const obj = {
            id, price, title, description, imgSrc
        }
        SetCart([...cart, obj]);
        console.log("cart element added", cart)
       
    }
    return (
        <div>

            <br /><br /><br /><br />

            <div className="container">

                <h1 className='text-center text-danger'>Releted Product</h1>

                <div className="row">
                    {
                        items.map((Product) => (
                            <div key={Product.id} className="col-lg-4 col-md-5 p-5 my-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <Link to={`/product/${Product.id}`} style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}>
                                        <img src={Product.imgSrc} className="card-img-top" alt={Product.title} />
                                    </Link>

                                    <div className="card-body">
                                        <h5 className="card-title">{Product.title}</h5>
                                        <Link to={Product.amazonLink} className="text-primary card-title">{Product.category}</Link>
                                        <p className="card-text">{Product.description}</p>
                                        <button
                                            onClick={() => addTocart(Product.id, Product.price, Product.title, Product.description, Product.imgSrc)}
                                            className="btn pointer btn-danger">Add to Cart</button> &nbsp;&nbsp;
                                        <Link to="/" className="btn pointer border-primary border">₹{Product.price}</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
}

export default Page;
