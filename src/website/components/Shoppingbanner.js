import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const Shoppingbanner = () => {
  
    const sliderImages = [
        {
          url:
            "https://vsmart.ajspire.com/uploads/slider/1671082475.jpg",
        },
       
      ];


  return (
    <div className="slider-box "style={{ marginTop: '170px' , paddingLeft: '10px' }}>
      <SimpleImageSlider  width={1500} height={900} images={sliderImages} showNavs={true} />
    </div>
  );
}

export default Shoppingbanner