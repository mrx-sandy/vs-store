// import React from "react";
 import './Slider.css'
// import SimpleImageSlider from "react-simple-image-slider";

// export default function Slider() {
//   const sliderImages = [
//     {
//       url:
//         "https://vsmart.ajspire.com/uploads/slider/1671082475.jpg",
//     },
//     {
//       url:
// "https://vsmart.ajspire.com/uploads/slider/1667996845.jpg"
//     },

      
   
//   ];

//   return (
//     <div className="slider-box "style={{ marginTop: '170px' , paddingLeft: '10px' }}>
//       <SimpleImageSlider  width={1500} height={900} images={sliderImages} showNavs={true} />
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';

const Slider = () => {

  const [Slider,SetSlider]=useState([]);
  const GetSlider = () => {
    fetch('https://vsmart.ajspire.com/api/banners')
      .then(response => response.json())
      .then(data => {
        SetSlider(data.banners);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
useEffect(()=>
{GetSlider();},[]);
  return (
    <div  className="Slider">
<Carousel>
  {
    Slider.map((slider)=>
(
  <Carousel.Item>
<img src={slider.slider_image} alt="girl in the jacket" width="1730" height="700" />
  </Carousel.Item>
)

    )
  }
</Carousel>


    </div>
  )
}

export default Slider