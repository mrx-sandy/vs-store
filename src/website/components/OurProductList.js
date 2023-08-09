import React, { useEffect, useState } from 'react';
import OurProduct from './OurProduct';

const OurProductList = () => {
  const [ourpro, setourpro] = useState([]);

  const getProduct = () => {
    fetch("https://vsmart.ajspire.com/api/products").then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        console.log(data)
        setourpro(data.products.data);
      }
    );
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container-fluid bg-light bg-icon py-6 mb-5">
      <div className="container">
        <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 400 }}>
          <h1 className=" text-center display-5 mb-3">Our product</h1>
        </div>

        <div className="parent-container">
          { ourpro.slice(0, 20).map((el) => {
            return (
              <OurProduct
                key={el.id} // Don't forget to add a unique key for each element in the map function
                img={el.product_image}
                name={el.english_name}
                brand={el.brand_name}
                mrp={el.mrp_price}
                sale={el.sale_price}
              ></OurProduct>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProductList;
