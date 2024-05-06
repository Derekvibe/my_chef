import React, { useState } from "react";
import "./HeroPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuOne from "./MenuOne";

const MenuTwo = () => {
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
  return (
    <>
      <MenuOne />
      <div className="MenuThree m-10">
        <h3 className="text-orange-600 text-2xl p-4 font-bold">
          “It’s not just the food but the joy it brings”- Wise Ruth
        </h3>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10 pt-16">
          <div className="food">
            <img src="/Images/Together_Images.png" alt="Images" />
          </div>

          <div className="text-left">
            <p>
              My chef was born out of a love for food and a desire to bring
              smiles to people’s faces. Whether it's a grand wedding, an
              intimate gathering, or a nourishing meal for your team we exist
              not just to offer food but joy because like Ruth so eloquently
              says, it’s not just the food but the joy it brings.
            </p>
            <p className="pt-5">
              At the heart of what we do is a passion for food and an unwavering
              commitment to spreading happiness.
            </p>

            <p className="pt-5">
              We have a carefully crafted menu and packages to fit into any type
              of event you might have, including a fully customizable menu if
              you want an all round service. Our dedicated team is trained to
              anticipate your need and satisfy those needs.
            </p>

            <p className="pt-5">
              Started by two fun loving sisters, MyChef is a happy place and our
              service radiates that joy and friendliness with the utmost
              professionalism.
            </p>

            <p className="pt-5">
              With every dish, every bite, and every moment we create, our goal
              remains the same: to make your experience truly exceptional. We
              look forward to catering to your event!{" "}
            </p>
            <button className="mt-5 bg-white text-black border-2 border-orange-600 p-2 m-2 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600">
              View more
            </button>
          </div>
        </div>
      </div>
      <div className="NextBg">
        <h3 className="text-orange-600 text-2xl p-4 font-bold">
          What Our Clients Say
        </h3>

        <Slider {...settings} className=" text-center m-auto p-36">
          <div className="w-60">
            <p>
              I enjoy hosting events but like most people I do not enjoy the
              work involved. My chef was referred to me by a friend and they
              came through. Now I can go back to enjoying hosting without
              worrying about all the work. Thank you Ruth and Debby. <br />
              <span className="text-orange-600">Maya </span>
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              cupiditate beatae soluta delectus nesciunt repellat tempore
              pariatur tempora harum minus illum vitae saepe dignissimos iusto
              vero quaerat perspiciatis debitis itaque error consequuntur ab
              reiciendis nemo, fugit sint! Quia, rem enim! <br />
              <span className="text-orange-600">Maya </span>
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              cupiditate beatae soluta delectus nesciunt repellat tempore
              pariatur tempora harum minus illum vitae saepe dignissimos iusto
              vero quaerat perspiciatis debitis itaque error consequuntur ab
              reiciendis nemo, fugit sint! Quia, rem enim! <br />
              <span className="text-orange-600">Maya </span>
            </p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default MenuTwo;
