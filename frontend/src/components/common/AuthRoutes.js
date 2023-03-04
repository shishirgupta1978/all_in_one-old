import React from 'react';
import Layout from './Layout';
import {Login,Register,ResetPassword,ChangePassword,Contact,Activate,NotFound,PrivateRoute} from '.';
import { Routes,Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/resetpassword" element={<ResetPassword/>} />
      <Route path="/changepassword" element={<PrivateRoute><ChangePassword/></PrivateRoute>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/activate/:uid/:token" element={<Activate/>} />
      <Route path="*" element={<NotFound/>} />
      
      </Routes>
  
  )
}

