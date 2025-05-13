import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BG from '../Images/backgroun1.jpg'
import BG2 from '../Images/background2.jpg'
import BG3 from '../Images/background3.jpg'
import BG4 from '../Images/background4.jpg'
import BG5 from '../Images/background5.jpg'
import BG6 from '../Images/background6.jpg'
import './SimpleSlider.css'



const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      👉
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      👈
    </div>
  );
};


export default function SimpleSlider() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{marginTop: "-50px"}}>
        <Slider {...settings}>
        <div style={{height: 200, width:300}}>
            <img style={{height: "100%", width: "100"}} src={BG} alt="" />
        </div>
        <div style={{height: 200, width:300}}>
            <img style={{height: "50%", width: "100%"}} src={BG2} alt="" />
        </div>
        <div style={{height: 200, width:300}}>
            <img style={{height: "50%", width: "100%"}} src={BG3} alt="" />
        </div>
        <div style={{height: 200, width:300}}>
            <img style={{height: "50%", width: "100%"}} src={BG4} alt="" />
        </div>
        <div style={{height: 200, width:300}}>
            <img style={{height: "50%", width: "100%"}} src={BG5} alt="" />
        </div>
        <div style={{height: 200, width:300}}>
            <img style={{height: "50%", width: "100%"}} src={BG6} alt="" />
        </div>
       
        </Slider>
    </div>
  )
}
