import React from 'react'
import { Button,Container, Carousel} from "react-bootstrap";
import { Link } from 'react-router-dom';
import {Title} from '../Title';
import "./index.scss";
//import { home_data } from '../../assets/data/data';


export const HomePage = () => {

    return (
        <>
            <Title title="Home" />
            <div class="logo-container">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="60" rx="10" fill="#4a9ac4"/>
    <text x="50" y="50" text-anchor="middle" fill="#fff" font-size="60">SG</text>
  </svg>
</div>

            <div className="home-page">
      <div className="header">
        <h1>Welcome to my website!</h1>
        <p>This is a website for showcasing my portfolio of work. Please click on the buttons below to learn more about my projects.</p>
      </div>
      <div className="button-container">
        <div className="button-card">
          <div className="button-description">
            <h2>Project 1</h2>
            <p>Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices libero at ante eleifend, vel interdum quam molestie. Donec vel urna eget nisl commodo sagittis. Fusce malesuada orci at turpis vestibulum, eu congue orci faucibus.</p>
          </div>
          <Link to="/button1">
            <Button variant="primary">Project 1</Button>
          </Link>
        </div>
        <div className="button-card">
          <div className="button-description">
            <h2>Project 2</h2>
            <p>Description of project 2. Nullam mattis libero a luctus consequat. In nec enim sed mauris pretium hendrerit. Ut eget tincidunt purus. Donec tristique lacinia velit, vitae facilisis lectus faucibus vel.</p>
          </div>
          <Link to="/button2">
            <Button variant="secondary">Project 2</Button>
          </Link>
        </div>
        <div className="button-card">
          <div className="button-description">
            <h2>Project 3</h2>
            <p>Description of project 3. Aenean varius ultrices nisl, quis dictum mauris suscipit at. Sed malesuada, leo id fermentum bibendum, est risus vestibulum quam, ac imperdiet turpis tellus ac tellus.</p>
          </div>
          <Link to="/doc">
            <Button variant="success">Project 3</Button>
          </Link>
        </div>
      </div>
    </div>
        </>
    )
}

