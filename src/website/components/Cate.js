import React from 'react'

const Cate = (props) => {
  return (
    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    <div class=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div class="testimonial-item position-relative bg-white p-5 mt-4">
            <p class="mb-4">{props.name}</p>
            <div class="d-flex align-items-center">
                <img class="flex-shrink-0 rounded-circle" src={props.banner} style={{height:100}}/>
            
            </div>
        </div>
       
    </div>
</div>
  )
}

export default Cate