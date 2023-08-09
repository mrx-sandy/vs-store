import React from "react";
import "./About.css";

const About = () => (
  <div className="about-main-container container">
    <section
      className="inner-section single-banner"
      style={{
        background:
          "url(https://cdn.britannica.com/17/196817-050-6A15DAC3/vegetables.jpg)",
      }}
    >
      <div className="container">
        <h2>About our company</h2>
        <h4 className="text-white">
          <ol className="breadcrumb">
            <i className="fas fa-home" /> &nbsp;
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            /
            <li aria-current="page" href="/about">
              {" "}
              About
            </li>
          </ol>
        </h4>
      </div>
    </section>

    <div className="row">
      <div className="about-heading-paragraph col-lg-6">
        <h1>About Vishwakarma Super Mart Private Limited</h1>
        <p>
          Vishwakarma Super Mart Private Limited is a direct selling company
          that deals with the distribution of a wide range of high-quality,
          lifestyle products for day-to-day life. Our aim is to deliver the best
          products directly to our consumers, who form the core of the company.
          Our networks of registered distributors are trained leaders and
          representatives who ensure that consumers get the best products, with
          additional free business opportunity benefits. The profitable
          opportunities offered have influenced many customers to purchase
          products from non-retail environments, owing to the expansion of
          direct selling across the country.
        </p>
      </div>
      <div className="about-image1 col-lg-3">
        <img src="https://vsmart.ajspire.com/images/about1.png" alt="" />
      </div>
      <div className="about-image1 col-lg-3">
        <img src="https://vsmart.ajspire.com/images/about2.png" alt="" />
      </div>
    </div>
    <div className="about-heading-paragraph col-lg-12">
      <div className="about-heading-paragraph col-lg-6">
        <h1>Our Vision</h1>
        <p>
          Vishwakarma Super Mart Private Limited to strive hard continuously and
          constantly to make every individual customer financially self-reliant,
          economically and socially strong through the self - help team concept.
        </p>
      </div>
      <div className="about-heading-paragraph col-lg-6">
        <h1>Our Mission</h1>
        <p>
          Vishwakarma Super Mart Private Limited has vision to create wealth
          that provides personal, professional, social, financial and spiritual
          growth to everyone. We aim to provide the highest level of quality and
          service possible with respect to the products and services that we
          offer and strive to create an environment and culture that lends
          itself to our distributor’s success.
        </p>
      </div>
    </div>
  </div>
);

export default About;
