import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertiesPage from '../property/PropertiesPage';
import DetailPropertyPage from '../property/DetailPropertyPage';
import CheckoutPage from '../eshop/CheckoutPage';
import EshopPage from '../eshop/EshopPage';
import HelpdeskPage from '../helpdesk/HelpdeskPage';
import Faqs from './Faqs';
import { ToastContainer } from 'react-bootstrap';
import CartPage from '../eshop/CartPage';

const AppRoutes = () => {
  const [navHeight, setNavHeight] = useState(0);

  return (
    <Router>
   <Header setNavHeight={setNavHeight} />
      <main style={{ paddingTop: navHeight }}>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/property/:slug" element={<DetailPropertyPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
      <Route path="/eshop" element={<EshopPage />} />
      <Route path="/helpdesk" element={<PrivateRoute><HelpdeskPage /></PrivateRoute>} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/activate/:uid/:token" element={<Activate />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ToastContainer theme="dark" />

    </main>
      <Footer/>
    </Router>
  );
}

export default AppRoutes;
