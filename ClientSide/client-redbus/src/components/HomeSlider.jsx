import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import bg_img_1 from "../images/redbus-bg-img-1.png";
import bg_img_2 from "../images/redbus-bg-img-2.png";
import bg_img_3 from "../images/redbus-bg-img-3.png";
import bg_img_4 from "../images/redbus-bg-img-4.png";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container overflow-hidden flex">
      <Slider {...settings}>
        <div>
          <img src={bg_img_1} alt="" />
        </div>
        <div>
          <img src={bg_img_2} alt="" />
        </div>
        <div>
          <img src={bg_img_3} alt="" />
        </div>
        <div>
          <img src={bg_img_4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
