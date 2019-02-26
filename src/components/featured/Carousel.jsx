import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  cssEase: "linear"
};

const Carousel = () => {
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
