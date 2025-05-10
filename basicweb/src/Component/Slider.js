
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BG1 from "../assets/bg1.gif"
import BG2 from "../assets/bg2.png"
import BG3 from "../assets/bg3.jpg"
export default function SimpleSlider() {

function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', height:200,zIndex:1000,marginRight:100 }}
          onClick={onClick}
        />
      );
    }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: 'block', height:200,zIndex:1000,marginLeft:100 }}
          onClick={onClick}
        />
      );
    }



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
   nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
  };
  return (
   <div style={{marginTop:50}}>
   
     <Slider {...settings}>
      <div style={{height:200,width:300}}>
       <img style={{width:"100%",height:"50%"}} src={BG1} alt='it'/>
      </div>
       <div style={{height:200,width:300}}>
        <img  style={{width:"100%",height:"50%"}}src={BG2} alt='it'/>
      </div>
       <div style={{height:200,width:300}}>
        <img style={{width:"100%",height:"50%"}} src={BG3} alt='it'/>
      </div>
     
    </Slider>
   </div>
  );
}