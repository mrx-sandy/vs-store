import React, { useState } from 'react'
import Shoppinglist from './Shoppinglist';

const Shoppingpro = () => {
    const [shoppingpro, setshoppingpro] = useState([])
    fetch("https://vsmart.ajspire.com/api/products").then(
        response => {
            return response.json();
        }
    ).then(
        data => {
            console.log(data);
            setshoppingpro(data.products.data)
        }
    )
    return (
        <div>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-0 gx-5 align-items-end">
                        <div class="col-lg-6">
                            <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: 500 }}>
                                <h1 class="display-5 mb-3">Our Products</h1>
                            </div>
                        </div>
                        <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                                </li>
                                <li class="nav-item me-0">
                                    <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-4">


                                {
                                    shoppingpro.map((el) => {
                                        return (
                                            <Shoppinglist
                                                img={el.product_image}
                                                name={el.english_name}
                                                brand={el.brand_name}
                                                mrp={el.mrp_price}
                                                sale={el.sale_price}
                                            ></Shoppinglist>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Shoppingpro


