import  "./Pageone.css";
import { useRef } from "react";
import { useEffect } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Pageone() {
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);
  return (
   
    <div className='video'>
        <div>
      <video   width="100%" height="70%"  ref={ vidRef }
   muted
   autoPlay
   loop>
        <source src="video.mp4" type="video/mp4"/>
     </video> 
     </div>
  <div className='content'>
  <div><h1  style={{fontSize:45}}>Welcome</h1>
   <p> Create Custom Cakes with Bake My Day</p></div>
    <div> 
        <p>Follow us</p>
        <div style={{display:'flex'}}>
        <button className="btn"> <InstagramIcon style={{height:'70%'}}/>Instagram</button>
         <button className="btn"><FacebookIcon  style={{height:'70%'}}/> Facebook</button>
        </div>
         
    </div>
  </div>

  </div>
 
 
  


   
  );
}





