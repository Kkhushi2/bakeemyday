import React, { useEffect, useState } from "react";
import "./FollowupPage.css";
import Carousel from "./Carousel";
import { CarpenterOutlined } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import { BetterCarousel } from "./BetterCarousel";
import { bgcolor } from "@mui/system";
import Button from '@mui/material/Button';
export const FollowupPage = (props) => {
    const[color,setColor]=useState(props.color)
    const[bg,setBg]=useState("")
    useEffect(()=>{
       if(props.color=='yellow'){
         setBg('https://img.freepik.com/free-photo/aesthetic-minimal-white-grid-pattern-wallpaper_53876-96916.jpg?w=1060&t=st=1675165136~exp=1675165736~hmac=559ebf94fbd9100d13bc7da31eeb48317332725a55fd07919972d9f97b0cb16e')
       }
       else{
         
       }
    },[])
    
  return (
    <>
      <div className="main-container" style={{backgroundImage:`url(../assets/${props.color})`,backgroundSize:'cover'}}>
        
          
        <div className="main-content">
          <div className="Header">
            <div className="choclatefont" style={{width:'50%',display:'flex',justifyContent:'flex-end'}}>
              
              <p>{props.name}</p>
              
            </div>
           
            <div className="viewall">
              <Button variant="outlined" style={{color:'black',backgroundColor:'white',borderColor:'black'}}>View all</Button>
              </div>
            
          </div>
          <div style={{display:'flex'}}>
            {/* <div className="productcardstrechy"></div> */}
          { (bg!="") &&
            <div className="card" style={{ width: "100%", backgroundImage:`url(${bg})` }} >
               
               <Carousel color={props.color}/>
             </div>

          }
          {
             (bg=="") && 
             <div className="card" style={{ width: "100%" }} >
               
             <Carousel color={props.color}/>
           </div>
              
          }
          </div>
          
        </div>
      </div>
    </>
  );
};
