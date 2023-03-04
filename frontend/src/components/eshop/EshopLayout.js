import React,{useState} from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
export const EshopLayout = () => {

    const [navHeight,setNavHeight]= useState(0);
  return (

    
    <div>
      <Header setNavHeight={setNavHeight}/>
      <main style={{ paddingTop: navHeight }}>
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

