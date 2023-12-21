import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeroSliderProps {
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  autoplay?: boolean;
  speed?: number;
  autoplaySpeed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  dots = false,
  arrows = true,
  infinite = true,
  autoplay = true,
  speed = 2000,
  autoplaySpeed = 4000,
  slidesToShow = 1,
  slidesToScroll = 1,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
  };

  const nextSlide = () => {
    setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
  };

  return (
    <Slider
      className="heroBannerSlider"
      dots={dots}
      arrows={arrows}
      infinite={infinite}
      autoplay={autoplay}
      speed={speed}
      autoplaySpeed={autoplaySpeed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      afterChange={(currentSlide) => setSlideIndex(currentSlide)}
    >
      <div className="heroSlides bgHero1">
        <div className="heroContent">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1>LET’S YOUR JOURNEY BEGINS WITH TRAVELLAB</h1>
                <p>
                  A charitable organization or charity is an organization whose
                  primary objectives are philanthr
                </p>
                <button className="button-fill-primary banner3-btn">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="heroSlides bgHero2">
        <div className="heroContent">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h1>ENJOY YOUR HOLIDAYS WITH TRAVELLAB</h1>
                <p>
                Explore breathtaking destinations and create unforgettable
                  memories.
                </p>
                <button className="button-fill-primary banner3-btn">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
