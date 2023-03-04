import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';

const DetailProperty = () => {
    const {properties}=useSelector((state)=>state.api)
    const { slug } = useParams();
    const [obj,setObj]= useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [productImages, setProductImages] = useState([]);

  
    const handleImageClick = (index) => {
      setActiveImage(index);
    };
    useEffect(()=>{

      if(properties && properties.results)
      {
        let ob=properties.results.find(o => o.slug === slug);
        if(ob)
        {
          setObj(ob);
        setProductImages([ob.photo1,ob.photo2,ob.photo3,ob.photo4]);
        }
        

      }


    },[properties,slug,setObj, obj,setProductImages])

    return (
        <div className="product-details m-2">
        { obj && <>
    <div className="product-images">
      <img
        src={productImages[activeImage]}
        alt="product"
        className="product-image"
      />
      <div className="image-thumbnails">
        { productImages.map((image, index) => (
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
      <h1>{obj.title}</h1>
      <p>{obj.description}</p>
      <div className="container1">
      <div className="key">Property Owner:</div>
      <div className="value">{obj.user}</div>
    </div>
    <div className="container1">
      <div className="key">Property Type:</div>
      <div className="value">{obj.property_type}</div>
    </div>
    <div className="container1">
      <div className="key">Plot Area:</div>
      <div className="value">{obj.plot_area}</div>
    </div>
    <div className="container1">
      <div className="key">Address:</div>
      <div className="value">{obj.property_number}, {obj.street_address}, {obj.city} - {obj.postal_code}, {obj.country}.</div>
    </div>
    <div className="container1">
      <div className="key">Price:</div>
      <div className="value">Rs.{obj.price}</div>
    </div>

    <div className="container1">
      <div className="key">Tax:</div>
      <div className="value">{obj.tax}%</div>
    </div>
    <div className="container1">
      <div className="key">Final Price:</div>
      <div className="value">Rs.{obj.final_property_price}</div>
    </div>
     
      <button>Interested ?</button>
    </div></>}
  </div>
  )
}

export default DetailProperty;
