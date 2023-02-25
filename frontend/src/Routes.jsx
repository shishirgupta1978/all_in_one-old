import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import ResetPassword from './pages/ResetPassword';
import ChangePassword from './pages/ChangePassword';
import About from './pages/About';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import NotFound from './components/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Activate from './pages/Activate';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import DetailProperty from './pages/DetailProperty';
import EshopHome from './pages/EshopHome';
import HelpdeskHome from './pages/HelpdeskHome';
const App = () => {
  return (
    <BrowserRouter>
      <Header className="fixed-top" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:slug" element={<DetailProperty />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
          <Route path="/eshop" element={<EshopHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/helpdesk" element={<PrivateRoute><HelpdeskHome /></PrivateRoute>} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer theme="dark" />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
