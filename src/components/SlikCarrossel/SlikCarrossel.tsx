import React, { Component, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import produto from "../../img/casePuff.png"
import Card from "../Card/Card";
import "./style.scss"
const MultipleItems = () => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  const products = [
    {
        id:1,
        image: produto,
        name:"Product 1",
        description:"This is product one.",
        price:20.50
    },
    {
        id:2,
        image: produto,
        name:"Product 2",
        description:"This is product one.",
        price:20.50
    },
    {
        id:3,
        image: produto,
        name:"Product 3",
        description:"This is product one.",
        price:20.50
    },
    {
        id:4,
        image: produto,
        name:"Product 4",
        description:"This is product one.",
        price:20.50
    },
    {
        id:4,
        image: produto,
        name:"Product 4",
        description:"This is product one.",
        price:20.50
    },
    {
        id:4,
        image: produto,
        name:"Product 4",
        description:"This is product one.",
        price:20.50
    },
    {
        id:4,
        image: produto,
        name:"Product 4",
        description:"This is product one.",
        price:20.50
    },
    {
        id:4,
        image: produto,
        name:"Product 4",
        description:"This is product one.",
        price:20.50
    },

]
  return (
    <div className="multiple-items">
      <div className="header-slider">
        <h2 className="title-slickCarousel">Produtos recomendados</h2>
        <div className="division-bar"></div>
        <p>Produtos selecionados que você também pode gostar</p>
      </div>
      <Slider {...sliderSettings}>
      {products.map(({id, image, name, description, price}, index) =>(
                    <Card 
                    key={index} 
                    id={id} 
                    image={image} 
                    name={name} 
                    description={description} 
                    price={price}/>
                ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;