import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { items } from './Data';
import Page from './Page';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [reletedproduct, SetReletedProduct] = useState([])

  useEffect(() => {
    const FilterData = items.filter((Product) => Product.id == id);
    const FilterBycategry = items.filter((e) => e.category === product.category)
    if (FilterData.length > 0) {
      setProduct(FilterData[0]);
      SetReletedProduct(FilterBycategry)
      // console.log(FilterBycategry)
    }
  }, [id, product.category]);

  return (
    <div>
      <br /><br /><br /><br />

      <div className="container">
        <h1 className='text-center'>Our product</h1> <br />
        <div className="Myset">
          <div className="img">
            {product.imgSrc ? (
              <img src={product.imgSrc} alt="Product Image" />
            ) : (
              <p>Loading product details...</p>
            )}
          </div>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <Link to={product.amazonLink} className="text-primary card-title">{product.category}</Link>
            <p className="card-text">{product.description}</p>
            <Link to="/" className="btn pointer btn-danger">Add to Cart</Link> &nbsp;&nbsp;
            <Link to="/" className="btn pointer border-primary border">₹{product.price}</Link>
          </div>
        </div>

        {/* <div className="row">
          <h2>Related Products</h2>
          {reletedproduct.map((e) => (
            <div key={e.id} className="col-md-3">
              <Link to={`Product/${e.id}`} className="card">
                <img src={e.imgSrc} alt="Product Image" />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <Link to={`/product/${e.id}`} className="text-primary">View Details</Link>
                </div>
              </Link>
            </div>
          ))}
        </div> */}



      </div>
      <Page  items={reletedproduct} />
    </div>
  );
}

export default ProductDetail;
