import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";

export default function Carousel(props) {
   const[color,setColor]=useState(props.color)
   const[visible,setvisible]=useState('hidden')
   var cakesList=props.item
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    
   
    autoplaySpeed: 2000,
   // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          initialSlide: 2,
         // infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 2,
         // infinite: true,
        },
      },
    ],
  };

  
 const handlediv=()=>{
   setvisible('visible')
 }
  const cakeView = () => {
    return cakesList.map((item) => {
       return(
        <>
             <div style={{height:'160px' ,width:'150px',backgroundImage:`url(${item.pic})`,backgroundSize:'cover'}}>
          
             </div>
               
         
        </>
       )
    })
  }   
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{cakeView()}</Slider>
    </div>
  );
}
