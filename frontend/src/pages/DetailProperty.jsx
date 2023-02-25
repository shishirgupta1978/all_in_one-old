import { useParams } from 'react-router-dom';
import React, { useState } from "react";






const DetailProperty = () => {
    const { slug } = useParams();
    const [activeImage, setActiveImage] = useState(0);
    const productImages = [
      "https://www.freeiconspng.com/uploads/house-12.png",
      "https://cdn.pixabay.com/photo/2016/03/23/19/38/shopping-carts-1275480_960_720.jpg",
      "https://example.com/image3.jpg",
      "https://example.com/image4.jpg",
    ];
  
    const handleImageClick = (index) => {
      setActiveImage(index);
    };
  

    return (
    <div className="product-details">
    <div className="product-images">
      <img
        src={productImages[activeImage]}
        alt="product"
        className="product-image"
      />
      <div className="image-thumbnails">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="product thumbnail"
            className={index === activeImage ? "thumbnail active" : "thumbnail"}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
    <div className="product-info">
      <h1>Product Name</h1>
      <p>Product description goes here</p>
      <p>Price: $100</p>
      <button>Add to cart</button>
    </div>
  </div>
  )
}

export default DetailProperty;
