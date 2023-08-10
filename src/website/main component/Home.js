import React from "react";
import Slider from "./Slider";
import OurProductList from "../components/OurProductList";
import Suggestion from "./Suggestion";

const Home = () => {
  return (
    <div className="home" style={{background: 'url(https://wallpaperaccess.com/full/4742991.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <Slider></Slider>
   
      <OurProductList />
    </div>
  );
};

export default Home;
