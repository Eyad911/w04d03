import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Card = () => {
  const { id } = useParams();

  const [city] = useState([
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
  const infoId = city.find((item) => {
    return item.id === Number(id);
  });
  return (
    <div className="cardsDiv">
      <h1>{infoId.name}</h1>
      <img src={infoId.img} alt="infopic" />
    </div>
  );
};
