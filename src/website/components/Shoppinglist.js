import React from 'react';

const Shoppinglist = (props) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="product-item border rounded shadow-sm">
        <div className="position-relative bg-light overflow-hidden">
          <img className="img-fluid w-100" src={props.img} alt="" />
          <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-3 px-2 py-1">
            {props.mrp - props.sale} Rsoff
          </div>
        </div>
        <div className="text-center p-3">
          <a className="d-block h5 mb-2" href="">
            {props.name}
          </a>
          <div className="price">
            <span className="text-primary me-1">Rs {props.sale}</span>
            <span className="text-muted text-decoration-line-through">Rs {props.mrp}</span>
          </div>
        </div>
        <div className="d-flex border-top py-2">
          <small className="w-50 text-center border-end">
            <a className="text-body" href="#">
              <i className="fa fa-eye text-primary me-2"></i>View detail
            </a>
          </small>
          <small className="w-50 text-center">
            <a className="text-body" href="#">
              <i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Shoppinglist;
