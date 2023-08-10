import React, { useState, useEffect } from 'react';

function Shop() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://vsmart.ajspire.com/api/shop')
      .then(response => response.json())
      .then(data => setItems(data.product.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <div>
      <h1>Shop</h1>
      <div className="row">
        {items.map(item => (
          <div key={item.id} className="col">
            <div className="product-card shadow">
              <div className="product-media">
                <a className="product-image" href={`/cat_product_one/${item.id}/${item.category_id}`}>
                  <img style={{ width: 150, height: 150 }} src={item.product_image} alt="product" />
                </a>
              </div>
              <div className="product-content">
                <h6 className="product-name">
                  <a href={`/cat_product_one/${item.id}/${item.category_id}`} title={item.name}>{item.name}</a>
                </h6>
                <h6 className="text-primary"><span><small>PV:</small>{item.pv}</span></h6>
                <h6 className="product-price">
                  MRP<del>{item.price}</del><span>{item.price}<small>/only</small></span>
                </h6>
                <button className="product-add" title="Add to Cart" onClick={() => addToCart(item)}>
                  <i className="fas text-white fa-shopping-basket"></i>
                  <button>add</button>
                  <div style={{ display: 'none' }} className="spinner-border" role="status"></div>
                </button>
              </div>
            </div>

            
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Shop;
