import React, { useState } from "react";
import "./HeroPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuOne = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const SliderComponent1 = () => {
    return (
      <Slider {...settings}>
        <p className="m-auto text-white text-left p-16">
          Need a breakfast buffet? Explore our carefully crafted breakfast menu
        </p>
      </Slider>
    );
  };

  return (
    <>
      <div className="MenuTwo">
        <h3 className="text-black text-2xl p-4 font-bold">Menu</h3>

        <div className="MenuBg flex justify-center">
          <SliderComponent1 />
        </div>

        <div className="p-3 flex gap-2 justify-center text-center">
          <input type="radio" name="" id="" />
          <input type="radio" name="" id="" />
          <input type="radio" name="" id="" />
        </div>
      </div>
    </>
  );
};

export default MenuOne;
