import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './componet/navbar';
import Page from './componet/Page';
import Cart from './componet/Cart';
import SearchItems from './componet/SearchItems';
import ProductDetail from './componet/ProductDetail';
import { items } from './componet/Data';

function App() {
  const [Data, SetData] = useState([...items]);
  const [cart, SetCart] = useState([]);

  return (
    <Router>
      <Navbar SetData={SetData} cart={cart} />
      <Routes>
        <Route path="/page" element={<Page cart={cart} SetCart={SetCart} items={Data} />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/Search/:Suraj' element={<SearchItems />} /> {/* Updated route */}
        <Route path='/Cart' element={<Cart cart={cart} SetCart={SetCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
