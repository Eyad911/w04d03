import React from "react";
import "./style.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";



export const Cards = () => {
    const history = useHistory()
  const [city, setCity] = useState([
    {
      id: 0,
      name: "KSA",
      img: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2018/04/08/1151021-1227194039.jpg?itok=mroK_eja",
    },
    {
      id: 1,
      name: "UAE",
      img: "https://earth.esa.int/web/earth-watching/content/documents/257246/3365628/Demo_images_animation.gif",
    },
    {
      id: 2,
      name: "Qatar",
      img: "https://static8.depositphotos.com/1134101/930/i/600/depositphotos_9308975-stock-photo-doha-skyline-at-night-qatar.jpg",
    },
  ]);
//   city.map((item,i)=>item.name);
const info = (id)=>{
console.log(id);
history.push(`/card/${id}`)
setCity()

}
  return (
    <div >
        
      <div  className="cardsDiv">
      {city.map((item,i)=>( 
           <div className="card" onClick={()=> info(item.id)}>
              <h1>{item.name}</h1>
              <img src={item.img} alt="city"/>
              
              </div>
          
        ))}
       
      </div>
    </div>
  );
};
