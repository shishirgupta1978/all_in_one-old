import React from 'react'
import { Button} from "react-bootstrap";
import Title from '../components/Title';
import { home_data } from '../static_data/data';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';


const Home = () => {

    return (



        <>
            <Title title="Home" />
                
                <Carousel slide={true} fade>
      
                {home_data.map((props,i)=>{return (  <Carousel.Item key={i} interval={3000}>
                    <img className='corimg'
                          src={props[0]}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  <div className='d-flex justify-content-center'>
      <div className='text-center'>
      <h1 className='mx-auto my-0 text-uppercase bg-warning '>{props[1]}</h1>
      <h2 className='text-white-50 mx-auto mt-2 mb-5 bg-dark'>{props[2]}</h2>
      <LinkContainer to={props[4]}><Button variant="warning">{props[3]}</Button></LinkContainer>
      </div>
      </div>
        
                  </Carousel.Caption>
                              </Carousel.Item>)

              } )}
      
                
                
                </Carousel>
          
   
            

        </>
    )
}

export default Home
