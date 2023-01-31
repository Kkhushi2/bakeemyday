import React from 'react'

export const BetterCarousel = (props) => {
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
       

       
      ];
      return cakesList.map((item) => {
        if(props.id==item.id){
        return  (
          <div className='productcardstrechy'>
          <div className='productcard'>
             <img src={`${item.pic}`} className="boxcakeimg"  /> 
          </div>
         </div>
        )
        {}

      }
                   
            
       
     } )
}
