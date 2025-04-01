import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { items } from './Data';

function navbar({ SetData }) {
    const navigate = useNavigate();  

    const FilterByCategory = (category) => {
        const filteredItems = items.filter((e) => e.category === category);
        SetData(filteredItems);
    }

    const FilterByPrice = (price) => {
        const filteredItems = items.filter((e) => e.price >= price);
        SetData(filteredItems);
    }

    const [SearchBar, SetSearchItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/Search/${SearchBar}`); 
        SetSearchItem("");
    }

    return (
        <>
            <div className="container">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm p-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand fw-bold" onClick={() => SetData(items)} to="/page">
                            <i className="fas fa-film text-primary"></i> Ecart Hub
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item"><Link onClick={() => FilterByCategory("mobiles")} className="nav-link active">Mobile</Link></li>
                                <li className="nav-item"><Link onClick={() => FilterByCategory("laptops")} className="nav-link">Laptops</Link></li>
                                <li className="nav-item"><Link onClick={() => FilterByCategory("tablets")} className="nav-link">Tablets</Link></li>
                                <li className="nav-item"><Link onClick={() => FilterByPrice(89999)} className="nav-link">{`>> ₹89999`}</Link></li>
                            </ul>
                            <form onSubmit={handleSubmit} className="d-flex me-3">

                                <input
                                    value={SearchBar}
                                    onChange={(e) => SetSearchItem(e.target.value)}
                                    className="form-control me-2"
                                    type="text"
                                    placeholder="Search movies..."
                                    aria-label="Search"
                                />


                            </form>
                            <h5><Link to={"/"}>Cart</Link></h5>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default navbar;
