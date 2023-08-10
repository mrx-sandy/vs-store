import React from 'react'

const AllProducts = () => {
  return (
   <div className="main">
  <section className="inner-section single-banner"    >
  <div className="container-aaa">
    <h2>View All Product</h2>
    <h4 className="text-white">
      <ol className="breadcrumbw">
        <i className="fas fa-home" /> &nbsp;<li className="breadcrumb-item"><a href="/">Home</a></li>
        /<li aria-current="page"> View All Product</li>
      </ol>
    </h4>
  </div>
</section>

  <section className="inner-section shop-part bg-light"  style={{background: 'url(https://wallpaperaccess.com/full/4742991.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
    <div className="container-cate"   >
      <div className="row content-reverse">
        <div className="col-lg-3" >
                    <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Price</h6>
            <form action="/search">
              <div className="shop-widget-group"><input name="min_price" type="text" placeholder="Min - 00" /><input name="max_price" type="text" placeholder="Max - 5k" /></div><button className="shop-widget-btn"><i className="fas fa-search" /><span>search</span></button>
            </form>
          </div>
          <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Category</h6>
            <form>
              <ul className="shop-widget-list shop-widget-scroll">
                <li>
                  <a className="link-dark" href="/product-shop/2/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Packaged Food</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (569)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/4/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Grocery</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (680)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/5/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Beverages</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (92)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/10/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Personal care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (808)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/13/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Home care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (506)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/14/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Stationary</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/20/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Grains</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (8)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/21/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Baby care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (76)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/22/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Health Care</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (40)
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/28/0">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Electronics</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (5)
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </form>
          </div>
          <div className="shop-widget">
            <h6 className="shop-widget-title">Filter by Brand </h6>
            <form>
              <ul className="shop-widget-list shop-widget-scroll">
                <li>
                  <a className="link-dark" href="/product-shop/208">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Halani Foods...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (7)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/207">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">HETAL MAHILA...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (6)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/206">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">PEPSICO INDIA...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (11)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/205">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Ashwamedh Foo...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/204">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Ashwamedh Foo...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/203">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Kimberly-Clar...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (5)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/202">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">ESME Consumer...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/201">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Cadbury</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (2)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/200">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Cookwell Food...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (2)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/199">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Pushparaj  En...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (2)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/198">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Shree produci...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/197">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Karnataka Soa...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (3)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/196">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Bajaj Consume...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (3)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/195">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">Pravin Produc...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (2)
                      </span></div>
                  </a>
                </li>
                <li>
                  <a className="link-dark" href="/product-shop/194">
                    <div className="shop-widget-content">
                      <input type="checkbox" />
                      <label htmlFor="brand1">national Agro...</label>&nbsp;&nbsp;&nbsp;<span className="shop-widget-number">
                        (1)
                      </span></div>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-filter">
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IndvTDM1UCt3Qndlb09oMlZ4Y3krZkE9PSIsInZhbHVlIjoiRzFwMmxram50MUtDRUhlMk85cStTdz09IiwibWFjIjoiMTY3MzM3MmNhZjU2MmJmNWY4YWIyMDQwZDE5YmViZmI1MzA0NjE3MDE1OGQwYzY3ZTYxMmYyYTgyZWEyMDhjZCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={16.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/2/10">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652950118.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/2/10" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/2/10" title="PATANJALI KESH KANTI NATURAL 5ML (16pcs)">PATANJALI KESH...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/2/10" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>2.72</span></h6>
                  <h6 className="product-price">
                    MRP<del>16.00</del><span>16.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjVDOU9WNUJnTjJJdHRPcFdBeERXU0E9PSIsInZhbHVlIjoia0dOSUprMVRFUFFTMmR4NjZuZHJMQT09IiwibWFjIjoiZjFhYWJjYmJiNDEzNGY1MzdlOTJhN2VkNmM3MzdiM2YzMWQ2MTM1MTMxY2JlYTIwYWI0NWYxYjVkYWVkYjllZSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={16.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/3/10">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653394188.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/3/10" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/3/10" title="Sunsilk Black Shine Shampoo (16pcs)">Sunsilk Black S...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/3/10" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>3.20</span></h6>
                  <h6 className="product-price">
                    MRP<del>16.00</del><span>16.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6InprR2Z5c0dwKzN4NjBsTTE3WlhPWEE9PSIsInZhbHVlIjoiN0gvN0JEKy95ZHRkV3o1WC9Qa3B0UT09IiwibWFjIjoiY2MxYjE2M2MzZjk3ZDE0M2FmMjA4NzY5YmY3ZWNlZTQ5OGI0OTUxYmM3ZjgzYWE3MDI3NzU1MWVkNjBhYWJlYSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={16.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/4/10">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653394266.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/4/10" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/4/10" title="Sunsilk Long Thik Shampoo (16pcs)">Sunsilk Long Th...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/4/10" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>2.38</span></h6>
                  <h6 className="product-price">
                    MRP<del>16.00</del><span>16.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IndrMCt6ZnFkVDJJejhPdDU5RXhmVGc9PSIsInZhbHVlIjoiZVRaZkJmbkdpRmhjaVVKTHlGYjBkUT09IiwibWFjIjoiYTY2M2VmMTdiNDUzNjI0ZDVlMGRiYTEyOWZlYWExMGYzYmZhYWZkYjJjYmZkMTY5NGM0MDViOGMyMjBjZjZmYiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={16.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/5/10">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652950452.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/5/10" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/5/10" title="Clinic Plus  Strong & Long Shampoo (16pcs)">Clinic Plus  St...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/5/10" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.13</span></h6>
                  <h6 className="product-price">
                    MRP<del>16.00</del><span>16.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ilh4Tjh0SENKV01OUWZQTTFqL1F3Vnc9PSIsInZhbHVlIjoiK09ZWHVjNy9kRDV3L1Z1YjJlWXViZz09IiwibWFjIjoiYzUwOTkwZTE3NjJlMzkyM2UyM2JhYTMyNWI1NzQ3MGFjNTFjOWJjYmE3YWM3NzFhMWZiMTVlZWI4MWM4YjhkYiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={10.00} />
              <input type="hidden" name="discount" defaultValue={2} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹2 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/6/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461116.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/6/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/6/4" title="Tamalpatra 10g">Tamalpatra 10g</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/6/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>30.70</span></h6>
                  <h6 className="product-price">
                    MRP<del>12.00</del><span>10.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ik13SXpQd2F1cDZ1elBvY29jVzBFZFE9PSIsInZhbHVlIjoiVWY5ZjVWb1dZR3BqVUR6NHp3NlplQT09IiwibWFjIjoiYjBmMDA3NWNjNjg0ODI3YzhjOTM3YmQ2OTBhZDRkZThlZjAyNDNiMGY3MWNlYzQ1NjNkZGIzNDU2ZjVhNDM2ZSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={16.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/7/10">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652950886.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/7/10" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/7/10" title="Patanjali Kesh Kanti Naturals Shampoo (16pcs)">Patanjali Kesh...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/7/10" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>4.09</span></h6>
                  <h6 className="product-price">
                    MRP<del>16.00</del><span>16.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ik1CVXNHSjRxczk1SGhLMEZVM0E2Ync9PSIsInZhbHVlIjoiY0dkUEQ4SHlPaVNCVFAzU0hnWmxGUT09IiwibWFjIjoiYTI3YTcwMmFiNTY3MGU1YzU5OGNhN2YwNDU2MWQ4YzdjYjFhY2IxOTdlM2NhZDljZjc1OThhZDRlMmM0ZGMwNCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={16.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/8/10">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652950956.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/8/10" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/8/10" title="Patanjali Kesh Kanti Aloevera 5 Ml (16pcs)">Patanjali Kesh...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/8/10" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>2.58</span></h6>
                  <h6 className="product-price">
                    MRP<del>16.00</del><span>16.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ii95enAycUxDekJGQWJKQ09uNTY0aWc9PSIsInZhbHVlIjoiOWtKQVBhSC9DakJtRUNNSkFTWi9vdz09IiwibWFjIjoiODA3YjRjYjgwOGJhZjBjZDIwM2NiMzBkMzIxY2NjZWRiMzRmNWIzY2IwYzdmMzM0NzlkM2IwMWI5ZWViODBjZCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={2} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹2 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/13/13">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653215764.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/13/13" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/13/13" title="Supari">Supari</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/13/13" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>4.76</span></h6>
                  <h6 className="product-price">
                    MRP<del>7.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6InpxWjRSTThOS0tEY21KYnpoSy9DT2c9PSIsInZhbHVlIjoiT3VJT0JWYzlvQUtRYjZhS0Qzd2FDdz09IiwibWFjIjoiNTk3OGRhNGU2YzgwNjViODlkYjVmNTdiOTZjOWNhMGZjNTE2YzMyOTZlZDUxNjQwOGJhZDk0MDYxZDJjMGIwZCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={10.00} />
              <input type="hidden" name="discount" defaultValue={2} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹2 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/15/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652957859.png" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/15/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/15/4" title="Sunth 10g">Sunth 10g</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/15/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>17.58</span></h6>
                  <h6 className="product-price">
                    MRP<del>12.00</del><span>10.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Im1lNm5WQmc1RytINEYrbmw2cGU3TXc9PSIsInZhbHVlIjoid3pBSTY5ZUs3dCtTZUxEamZaRUlGQT09IiwibWFjIjoiNjA3OGEwNGI3YzY3ZWVhNDgxNGJhNjM4OTZjYTM1ODdmZGYzYjc1NTBlYzI3ODFmYTBkMjdjMDZiMWE4YzZiYSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={12.00} />
              <input type="hidden" name="discount" defaultValue={3} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹3 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/16/13">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652958549.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/16/13" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/16/13" title="Khadisakhar M 50Gm">Khadisakhar M 5...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/16/13" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>8.28</span></h6>
                  <h6 className="product-price">
                    MRP<del>15.00</del><span>12.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6ImdwRE9IOHY3VlQ1Ny84S05kNHM0ZUE9PSIsInZhbHVlIjoiUjdxcmxkZlpWZlMrdXlEby9OMDgvQT09IiwibWFjIjoiMTlhNmE4MTNlNmE4NzljZDEyMGMzYmYwZjZkYTIwY2M5MDRiMWRmYzUyOTI1YmYxZmY4YmUxNjI3N2QyYTBhMiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={7.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/17/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652958739.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/17/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/17/4" title="Kesar Yellow">Kesar Yellow</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/17/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>2.96</span></h6>
                  <h6 className="product-price">
                    MRP<del>7.00</del><span>7.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IlpEWmtZMWNXalhJVWNCcytuMTc0L0E9PSIsInZhbHVlIjoidGVzZ0RwS3BsTHFqZVZIUXBQK0s3UT09IiwibWFjIjoiZTc0YTBkOTA2OTJhNTU5NjU4ZWQ0N2Q4MmJlMTZmMDAxMGI3NmQ0YjExODg2YTI1ZDk4MzZlYmViNmViY2ZjMiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={7.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/19/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652958891.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/19/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/19/4" title="Lemon Yellow Colour 10gm">Lemon Yellow Co...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/19/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>7.41</span></h6>
                  <h6 className="product-price">
                    MRP<del>7.00</del><span>7.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6ImNGTHFtVmdwS2twUCs1SUJNdVBjOGc9PSIsInZhbHVlIjoieGREcm1RUVBTRzllQ0JVbnRqdkl3QT09IiwibWFjIjoiMzIwNjUxYjM0Mjc1ZjcxYzFkZjgxMDkzYjg5YTM1ZTczNWFmYjI4MWM2ZjEwZGFkNWYzM2UzNWUxY2VjY2UzNCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={7.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/20/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652958963.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/20/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/20/4" title="Orange Red">Orange Red</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/20/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>3.94</span></h6>
                  <h6 className="product-price">
                    MRP<del>7.00</del><span>7.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ild3YzBMNkFxNWlqbmNjckJibnRpUnc9PSIsInZhbHVlIjoiMmt1Y0JGdkxmWUxQckE0MDV1cmdwQT09IiwibWFjIjoiZWJlODdiMjZiODNhY2EwNDM3MWZmZTlmODZhNjVmMDc2YzMwMzYwYjgyMjE2NTYxMDk0MmNkYzY1NDAzYTk0NiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={10.00} />
              <input type="hidden" name="discount" defaultValue={5} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹5 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/21/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461215.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/21/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/21/4" title="Dalchini 10g">Dalchini 10g</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/21/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>5.01</span></h6>
                  <h6 className="product-price">
                    MRP<del>15.00</del><span>10.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IlRoTDRBaW43VHZzbkpHTWp3SDdVUlE9PSIsInZhbHVlIjoieGxZdjBmSVU5dnpDMDd5SExFaEFhdz09IiwibWFjIjoiMzdmMTAwZWJjN2RhYjJlYWE4MjFjNDcxMDBlYmIxNTM3ZmRlOGIwZjdjZjQzMGJhYmFkZmY4MTVlNGRhNzc0NSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/22/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461289.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/22/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/22/4" title="surabhi Ginger Garlic Paste 25g">surabhi Ginger...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/22/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>2.13</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IlYyRnJFQk02NStVZ0dpVE5YNXFYOHc9PSIsInZhbHVlIjoiNWttQVpvNUgxZi9VaDZHSzMraWk2QT09IiwibWFjIjoiYWU3ZjMwZTRiN2E3NDQ0MzQxMWRiZTljNzEzM2E0NTMxMmJkNDI1YWEzZGY2NmFjOGU5NDVjNDJmNDQ2NWU5MCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={4.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/23/13">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653389150.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/23/13" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/23/13" title="COMFORT MORNING FRESH 19 ML">COMFORT MORNING...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/23/13" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>0.20</span></h6>
                  <h6 className="product-price">
                    MRP<del>4.00</del><span>4.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjBiSVBGb3R3UzVzYWpyQlhkU1VVYXc9PSIsInZhbHVlIjoidUJ3dGxidzVPUnhhQlVRUVdCZG5Zdz09IiwibWFjIjoiZTA1NzE2ZDNiNzAzMjQ0ZTI5YmI0OGNiZWYyMWY2MGYyMzAwNGIwOThlY2JjYzIxMzdkMTZmYjgyOGFiOWQ0NiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={10.00} />
              <input type="hidden" name="discount" defaultValue={5} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹5 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/24/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461393.jpeg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/24/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/24/4" title="Shankeshwari 10gm">Shankeshwari 10...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/24/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>9.76</span></h6>
                  <h6 className="product-price">
                    MRP<del>15.00</del><span>10.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjU5cnNmK0pkalQrSVZsZDlOODUxY0E9PSIsInZhbHVlIjoiSEhwSnVHVGVaS0pIL2gvZncvSmVrQT09IiwibWFjIjoiNzM4NWE0NjRlMjFmNTE5MWI1OTIzZjhkY2Q0NTU2OGU1NWY2ODNiMzhkNWE2NGJiNzU1OTIwNzg0MTIxMDQzNSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/29/13">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653389002.webp" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/29/13" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/29/13" title="GHADI SOAP 5RS">GHADI SOAP 5RS</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/29/13" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.04</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ik1rdVAyWjZZdWtpckZDY29PK3g5SWc9PSIsInZhbHVlIjoibW1HbTlXaVNPYVhoTTNTVzFqRmo4QT09IiwibWFjIjoiZmExNzJlMTIyZTQ1YTI3NjZiY2QwZTdlMGUyNGU0YTJlYjZjM2NkMzk5NzljZDQ5ZjEwN2M5MDQ1YmQ1NTZhMyIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/32/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652963063.png" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/32/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/32/4" title="Everest Pasta Masala 10 Gm">Everest Pasta M...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/32/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>0.72</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IklDNlJPQlUvQU8vdUdUVHVIWGN4OXc9PSIsInZhbHVlIjoibVF4TDhPU1Z2RmVtK1dmR0tDU3BKQT09IiwibWFjIjoiYTBkNWE5OWM1ZDg0NTlhODQ1YmI5NzJjYmU3NzA1ZmM3OGYyYWE2ZjJhNGMzYWZhZjMyOTRjMDlhZTI0ZDNkYSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={10.00} />
              <input type="hidden" name="discount" defaultValue={2} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹2 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/33/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652963161.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/33/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/33/4" title="Methi 50g">Methi 50g</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/33/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>8.75</span></h6>
                  <h6 className="product-price">
                    MRP<del>12.00</del><span>10.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjNYbXdjM3lIanBCR3FPK2ZQVHRpUlE9PSIsInZhbHVlIjoiOUZiSEUxbmZzZDFWSTAyV01kcUNOdz09IiwibWFjIjoiMTg2ODgwYjVmMzVhYjIwZjkxOTdhNmIzYzExN2VkNzZkMzE2ZWM0MmJhNjVhY2FkNjdlN2I2YTg1N2I2YzcyOCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/37/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652963763.jpeg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/37/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/37/2" title="Munch">Munch</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/37/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.44</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6InJ5ckQ3YVYyV0FibWc0dDhQSE1hU2c9PSIsInZhbHVlIjoibHFLOXU4eEdQT0Ixd0xnb256dVluUT09IiwibWFjIjoiZjQ5ODYyNThmMDFiOWM2NzE4ZTI2ZmJkOWMzM2VmODNlZmIxZWU1ZGIyZGU1ZmI5OGI2M2I3M2NjMzEyODY0YiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/39/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1655802360.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/39/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/39/2" title="Good Day Cashew 33 Gm">Good Day Cashew...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/39/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.00</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjJnSEE2VjJWdW16UENiTjVPM054Znc9PSIsInZhbHVlIjoiclRiT215YWRiNDVxZ0g5dzN1Qkx5Zz09IiwibWFjIjoiZWQ3OGFkMzdjZWU0Yzg4MTZmNzRkZmQwNmQ3ODY0YmU4Zjg3ZTBjMWM2MDNiY2M5MDExYzRlYmMyNTdjMzcwYyIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/40/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1652964007.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/40/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/40/2" title="Good Day Butter 33 Gm">Good Day Butter...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/40/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.63</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Ill5T1VhRlZxd2o5K3N2emREMlk3WHc9PSIsInZhbHVlIjoid3F2UTc4djRyMFBKWVBkZ0pMTlBadz09IiwibWFjIjoiZDA2MDBhMDIzMDcxMDUyNDE1NTE1ZTA3MGQ4ODBmYTEyYTc5MWJkYjlhM2RkMDFlZDBlZDJmODRiOTNmYjVhOCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/41/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653035930.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/41/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/41/2" title="Bingo Mad Angles Masala">Bingo Mad Angle...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/41/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>2.19</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Imk4UGx1a3I0RGNtTjdYaXFNRkJ5NlE9PSIsInZhbHVlIjoiS0RySFpzWFUwcWVuZUNubTFGQ1N4UT09IiwibWFjIjoiZTcwMTRhN2VmYjEzMWNhOTQ0ZDBkNjA2NGRhM2NlMjg2MDJhOWQ1YTJiMTRlNDZiYjYyODEyMmVlYmEwMzI5ZCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/43/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1656656045.webp" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/43/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/43/2" title="Marie Gold 39 Gm">Marie Gold 39 G...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/43/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.30</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IndYM2FKdE5selgrOGxmbWM2dlpwRGc9PSIsInZhbHVlIjoiVWVmRGVoVjgzampsc1p6cmV6OENuUT09IiwibWFjIjoiN2I2YTQzMDViZmU5MzIyYTY0NGY2ODFkNjkyNzMyZGFjYTdiZjc4NTU2Mjg1Y2RlOGZkMjJhMmU2MWJjYTg2ZiIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={7.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/44/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461492.webp" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/44/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/44/4" title="I Shakti Soda 30 Gm">I Shakti Soda 3...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/44/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.09</span></h6>
                  <h6 className="product-price">
                    MRP<del>7.00</del><span>7.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjdJL2F6NGh0K1hMczFDZ2ZObDhYcFE9PSIsInZhbHVlIjoiSWFUYXBSVjNIdVFVNlBXUjBvbnZnZz09IiwibWFjIjoiNDI4Zjg5MDA5Mjc5NWM5NGU2MDk5ZjhmNWZmODhkNjVkNDA5N2ZiYjE2OWMwNGUyYTExYWQwZjg0MTg2ZWRmYyIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={13.00} />
              <input type="hidden" name="discount" defaultValue={2} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">₹2 Off</label>
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/45/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653307401.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/45/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/45/2" title="Pasta 100gm">Pasta 100gm</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/45/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>10.85</span></h6>
                  <h6 className="product-price">
                    MRP<del>15.00</del><span>13.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjR2clc3RVB6M3hrRmszeG9nanR5M2c9PSIsInZhbHVlIjoiZTgvb1c1L1VwQTcraW95YlYzRTcwUT09IiwibWFjIjoiZTUzMTAwNTdjN2RjOTZjYzk3NDhjYWY4MzJhZWFiMjZlZDM3ZGRhODQ0YzA5YWEwMTYyYTk4ODc3NjI5YjUxNSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={7.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/46/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653036163.jpeg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/46/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/46/2" title="Maggi 40g Rs7">Maggi 40g Rs7</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/46/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>0.39</span></h6>
                  <h6 className="product-price">
                    MRP<del>7.00</del><span>7.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6Im1KeGFxandaYVQwcFN6WEdjRk9paUE9PSIsInZhbHVlIjoiVHY4OVluSzV5dXNLSGQydDhOWXFLQT09IiwibWFjIjoiZjc2Nzg3MWI5YTZiZDQ2ZWM2NWVkZjliZWE2ZmIyZDNkNjM1MTkyZDdiNmExZTg1OWNmZGQ3YjE0YjYyYzI3OSIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/48/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461564.webp" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/48/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/48/4" title="Maggi Masala 6 G">Maggi Masala 6...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/48/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>1.08</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6IjdwZ0wvRjE3YmxFRHhmV0MwQ21FdkE9PSIsInZhbHVlIjoiSmlTMXo2Z1YxU3Z6b2VCWjRtaGJldz09IiwibWFjIjoiOTAyYTg0ODkyZTViNWYzOTVjYzNjNzk0YmM3N2FhYTEwZDc3MTQ0Y2E5MmY3ZDRiZTE2OTU5ZDQ2ZTM1NzVjNCIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={10.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/49/13">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653215342.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/49/13" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/49/13" title="match box Home lites 1x10">match box Home...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/49/13" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>6.62</span></h6>
                  <h6 className="product-price">
                    MRP<del>10.00</del><span>10.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6ImVFdXJVTFAyc3RJNEp0aENWRjJaQnc9PSIsInZhbHVlIjoiMWlrT0RBNCtNQXNHK0ZKWk41OVJ1QT09IiwibWFjIjoiOGE0NGIyMTA2ZGNmOTY2N2I5Yzk2Mjc0MWM2MTdhM2IwZmIzODI0NTFhZjJjYTEwNzk5M2MyMGRiOGJmOGJkYyIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={5.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/50/2">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653036397.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/50/2" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/50/2" title="Yippee Noodles Rs.5">Yippee Noodles...</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/50/2" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>0.34</span></h6>
                  <h6 className="product-price">
                    MRP<del>5.00</del><span>5.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <input type="hidden" name="product_id" defaultValue="eyJpdiI6InBiQ21TK2pSb3ZlUmRnbkZpSTQwa3c9PSIsInZhbHVlIjoiTE9HeGp2N2VTNkU3bkQzLzIxdWdHQT09IiwibWFjIjoiMDQ4MjU2MDA5Nzk4ZDYzZDhmOTdkYjMwZDRjMTNmNTZhMzJkZGJmYzdiMTYxMzlmMzQ2Yjg0MTExM2VlZThhYyIsInRhZyI6IiJ9" />
              <input type="hidden" name="price" defaultValue={8.00} />
              <input type="hidden" name="discount" defaultValue={0} />
              <input type="hidden" name="user_id" defaultValue />
              <div className="product-card shadow">
                <div className="product-media">
                  <div className="product-label">
                  </div>
                  <a className="feature-wish wish" href="/user-login">
                    <i className="fas fa-heart" /></a>
                  <a className="product-image" href="/cat_product_one/51/4">
                    <img style={{width: 150, height: 150}} src="https://vsmart.ajspire.com/uploads/product_image/1653461633.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a title="Product Compare" href="/user-login" className="fas fa-random" />
                    <a title="Product View" href="/cat_product_one/51/4" className="fas fa-eye" />
                  </div>
                </div>
                <div className="product-content">
                  <h6 className="product-name"><a href="/cat_product_one/51/4" title="Karale 50g">Karale 50g</a>
                  </h6>
                  <div className="product-rating"><a href="/cat_product_one/51/4" />
                  </div>
                  <h6 className="text-primary"><span><small>PV
                        :</small>3.08</span></h6>
                  <h6 className="product-price">
                    MRP<del>8.00</del><span>8.00<small>/only</small></span>
                  </h6>
                  <button className="product-add" title="Add to Cart"> <a href="/user-login"><i className="fas text-white fa-shopping-basket" /></a>
                    <span>add</span> 
                    <div style={{display: 'none'}} className="spinner-border" role="status">
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination text-left">
                <nav className="d-flex justify-items-center justify-content-between">
                  <div className="d-flex justify-content-between flex-fill d-sm-none">
                    <ul className="pagination">
                      <li className="page-item disabled" aria-disabled="true">
                        <span className="page-link">« Previous</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="https://vsmart.ajspire.com/shop?page=2" rel="next">Next »</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div>
                      <p className="small text-muted text-center mb-4">
                        Showing
                        <span className="font-medium">1</span>
                        to
                        <span className="font-medium">32</span>
                        of
                        <span className="font-medium">2785</span>
                        results
                      </p>
                    </div>
                    <div>
                      <ul className="pagination">
                        <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                          <i className="fas fa-long-arrow-alt-left" />
                        </li>
                        <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=2">2</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=3">3</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=4">4</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=5">5</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=6">6</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=7">7</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=8">8</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=9">9</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=10">10</a></li>
                        <li className="page-item disabled" aria-disabled="true"><span className="page-link">...</span></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=87">87</a></li>
                        <li className="page-item"><a className="page-link" href="https://vsmart.ajspire.com/shop?page=88">88</a></li>
                        <li className="page-item">
                          <a className="page-link" href="https://vsmart.ajspire.com/shop?page=2" rel="next" aria-label="Next »"><i className="fas fa-long-arrow-alt-right" /></a>
                        </li>
                      </ul>
                    </div>
                  </div></nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default AllProducts
