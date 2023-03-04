import React, { useState } from 'react';

export const Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };


  // Set up an array of slide objects with image URLs and captions
  const slides = [
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480_960_720.jpg',
      caption: 'Check out our new arrivals!',
    },
    {
      imageUrl: 'https://www.freeiconspng.com/uploads/house-12.png',
      caption: 'Get free shipping on orders over $50.',
    },
    {
      imageUrl: 'https://img.freepik.com/premium-photo/helping-remotely-remotely-still-life-shot-wireless-headset-laptop-desk-call-center_590464-54309.jpg',
      caption: 'Limited time sale - up to 50% off!',
    },
  ];

  // Set up a function to handle clicking the "next" button


  return (
    <div className="slider-container">
dff
    </div>  );
};

