import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";

export default function Carousel(props) {
   const[color,setColor]=useState(props.color)
   const[visible,setvisible]=useState('hidden')
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
         // infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         // infinite: true,
        },
      },
    ],
  };

  var cakesList = [
    { id: 2, pic: "../assets/cupcake.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 1, pic: "../assets/cake.png" },
    { id: 2, pic: "../assets/cupcake.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 1, pic: "../assets/cake.png" },
    { id: 2, pic: "../assets/cupcake.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 1, pic: "../assets/cake.png" },
    { id: 2, pic: "../assets/cupcake.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 3, pic: "../assets/pastry.png" },
   
    { id: 2, pic: "../assets/cupcake.png" },
    { id: 3, pic: "../assets/pastry.png" },
    { id: 3, pic: "../assets/pastry.png" },
  ];
 const handlediv=()=>{
   setvisible('visible')
 }
  const cakeView = () => {
    return cakesList.map((item) => {
      if(color=="yellow"){
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              zIndex: 2,
              padding:'10px'
            }}
            key={item.id}
          >
                <div className="godji">
                <div className='productcardstrechy' style={{backgroundColor:'rgb(225, 195, 106);'}}>
            <div className='productcard' style={{display:'flex',justifyItems:'space-between'}}>
               <img src={`${item.pic}`} className="boxcakeimg"  /> 
               <div style={{width:'100%',backgroundColor:'white',visibility:{visible}}}></div>
            </div>
           </div>
          </div>
          </div>
        );
      }
      else{
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              zIndex: 2,
            }}
            key={item.id}
          >
                
                <div className='productcardstrechy' style={{backgroundColor:"White"}}>
            <div className='productcard' style={{backgroundColor:"rgb(225, 195, 106)",display:'flex'}} >
               <img src={`${item.pic}`} className="boxcakeimg"  onMouseEnter={handlediv}/> 
               <div style={{width:'200%',backgroundColor:'white',visibility:{visible}}}></div>
            </div>
           </div>
          </div>
        );
      }
      
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{cakeView()}</Slider>
    </div>
  );
}
