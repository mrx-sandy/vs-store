import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [ourgro, setourgro] = useState([]);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [subcategory, setsubcategory] = useState([]);
  const[brand,setbrand]=useState([]);

  const Getbrad=()=>{
    fetch('https://vsmart.ajspire.com/api/brands')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setbrand(data.brands);
    });
  }



  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  const getcategory = () => {
    fetch("https://vsmart.ajspire.com/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setourgro(data.categories);
      
        data.categories.forEach((category) => {
          getsubcategory(category.category_id);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };


  const getsubcategory = (category_id) => {
    fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`)
      .then((response) => response.json())
      .then((data) => {
        const newsubcategory = data.subcategories;
        setsubcategory((previoussubcategory) => {
          const filtersubcategory = newsubcategory.filter(
            (newsubcategory) =>
              !previoussubcategory.some(
                (previoussubcategory) => previoussubcategory.subcategory_id === newsubcategory.subcategory_id
              )
          );
          return [...previoussubcategory, ...filtersubcategory];
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getcategory();
  }, []);

  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      {/* Top Bar */}
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex bg-success">
        {/* Top Bar Content */}
        <div className="col-lg-6 px-5 text-start">
          <small><h6>Welcome to VS Mart in Your Dream Online Store!</h6></small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          <small>Follow us:</small>
          <a className="text-body ms-3" href="/"><i className="fab fa-facebook-f" /></a>
          <a className="text-body ms-3" href="/"><i className="fab fa-twitter" /></a>
          <a className="text-body ms-3" href="/"><i className="fab fa-linkedin-in" /></a>
          <a className="text-body ms-3" href="/"><i className="fab fa-instagram" /></a>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
        </Link>
        <img src="https://vsmart.ajspire.com/images/logo1.png" alt="Logo" />

        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto p-4 p-lg-0">
            {/* Home */}
            <li className="navbar-item">
              <Link to="/home" className="nav-link"><h3>Home</h3></Link>
            </li>

            {/* Shopping */}
        <li className="navbar-item dropdown-megamenu">
                  <Link to="/" className="nav-item nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <a><h3>Brand</h3></a>
                  </Link>

                  <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Dropdown.Menu className="mega-menu" style={{ height: 'auto', width: '1000px', marginLeft: '-220px' }}>
                      <div className="row">
                        {
                          brand.map((subrand)=>(

                          
                        <div className="col-md-3">
                          <div className="megamenu-wrap">

                            <ul className="megamenu-list sub">
                              <Link to="/hbrand">
                              <li>
  <Link to="/brand" className="nav-link">{subrand.brand_name}</Link>
</li>

                              </Link>
                              
                            </ul>
                          </div>
                        </div>
                        ))
                        }
                        <Link to="/">
                          <button>show more</button>
                        </Link>
                      </div>
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
             {/* Categories */}
             <li className="navbar-item dropdown-megamenu">
              <Link to="/category" className="nav-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
               <h3> Categories</h3>
              </Link>

              {/* Mega Menu */}
              <Dropdown show={showMegaMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Dropdown.Menu className="mega-menu" style={{ height:'100', width: '500px', marginLeft:'-220'}}>
                  <div className="row">
                    {ourgro.map((el) => (
                      <div className="col-sm-3" key={el.category_id}>
                        <Link to={`/category/${el.category_id}`}>
                          <h5 className='font-weight-bold'>{el.category_name}</h5>
                        </Link>
                        <ul>
                          {subcategory
                            .filter((sub) => sub.subcategory_category_id === el.category_id)
                            .map((sub) => (
                              <li key={sub.subcategory_id}>
                                <Link to={`/subcategory/${sub.subcategory_id}`}>
                                  {sub.subcategory_name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="navbar-item">
              <Link to="/legel" className="nav-link"><h3>Legel</h3></Link>
            </li>
            {/* <li className="navbar-item">
              <Link to="/banking-details" className="nav-link"><h3>Banking Details</h3></Link>
            </li> */}

            {/* Shopping */}
            <li className="navbar-item">
              <Link to="/blog" className="nav-link"><h3>Blog</h3></Link>
            </li>

            <li className="navbar-item">
              <Link to="/shop" className="nav-link"><h3>Shop</h3></Link>
            </li>

            {/* Shopping */}
            <li className="navbar-item">
              <Link to="/about" className="nav-link"><h3>About</h3></Link>
            </li>

            <li className="navbar-item">
              <Link to="/login" className="nav-link"><h3>Login</h3></Link>
              {/* <Link className="btn-sm-rounded-pill bg-danger rounded-pill ms-5 fa fa-user text-body" to="/login"><h3>Login</h3></Link> */}

            </li>
            <div className="navbar-info-group">
            <div className="navbar-info">
              <i className="icofont-ui-touch-phone" />
              <li>
                <h5>Call us</h5>{" "}
                <h3 className="link-secondary1" href="tel:7057921848">
                  <h6>(+91)7057921848</h6>
                </h3>
              </li>
            </div>
            <div className="navbar-info">
              <i className="icofont-ui-email" />
              <li>
                <h5>Email us</h5>{" "}
                <h3
                  className="link-secondary1"
                  href="sandipgadekar143@gmail.com"
                >
                  <h6>sandipgadekar143@gmail.com</h6>
                </h3>
              </li>
            </div>
            <div className="d-none d-lg-flex ms-2">
          {/* Search */}
          <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
            <small className="fa fa-search text-body"></small>
          </a>

          {/* Login */}
       
          {/* Shopping Bag */}
          <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
            <small className="fa fa-shopping-bag text-body"></small>
          </a>

          
        </div>
          </div>
           
          </ul>
        </div>

        {/* Additional Links */}
       
      </nav>
    </div>
  );
};

export default Header;
