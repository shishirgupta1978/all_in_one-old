import React from 'react';
export * from './HomePage';
export * from './Login';
export * from './Register';
export * from './ChangePassword';
export * from './ResetPassword';
export * from './PrivateRoute';
export * from './Activate';
export * from './Contact';
export * from './NotFound';
export * from './Layout';
export * from './Title';
export * from './Spinner';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { ToastContainer } from 'react-bootstrap';
import {AuthRoutes} from './AuthRoutes';
import {HomePage} from './HomePage';
import {Layout} from './Layout';
import { Contact } from './Contact';
import { Activate } from './Activate'; 
import DocHomepage from '../doc/Homepage'
import { DocLayout } from '../doc/DocLayout';
import {CartPage,CheckoutPage,EshopLayout,EshopPage,Faqs,ProductItem} from '../eshop'


const CommonRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage/>} />
             
           </Route>
      <Route path="/doc" element={<DocLayout/>} >
      <Route index element={<DocHomepage />} />

        </Route>     
      <Route path="/eshop" element={<EshopLayout/>} >
        <Route index element={<EshopPage />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="activate/:uid/:token" element={<Activate />} />
      
    </Route>
           

    </Routes>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default CommonRoutes;
