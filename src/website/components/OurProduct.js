import React from 'react'
import './OurProduct.css'
const OurProduct = (props) => {
  return (

    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">

      <div class="bg-white text-center h-100 p-4 p-xl-5">
        <div>
          <div class="position-relative bg-light overflow-hidden">
            <img class="img-fluid " src={props.img} alt="" style={{ height: 100 }} />
            <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{props.mrp - props.sale}Rsoff</div>
          </div>
          <h4 class="mb-3">{props.name}</h4>
          <p class="mb-4">{props.brand}</p>
          <div>
            <span class="text-primary me-1">{props.sale}</span>
            <span class="text-body text-decoration-line-through">{props.mrp}</span>
          </div>
          <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default OurProduct;