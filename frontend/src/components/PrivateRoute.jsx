import React,{useEffect }   from 'react';
import { useLocation,Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateaccess } from '../api/apiSlice';

const PrivateRoute =props=> {
  let location = useLocation();
  
  const dispatch = useDispatch();
  const {user} = useSelector(
      (state) => state.api
  );

useEffect((user)=>{
if(user)
{
    dispatch(updateaccess({"url": "/api/v1/auth/jwt/refresh/", "method": "post","data" :{'refresh':user?.refresh}}));
}
},[dispatch]);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
 
  return props.children;
}

/*const PrivateRoute= props => {
const authenticated =false;
  return (
    <Route {...props}>{!authenticated ? <Navigate to='/login' />: props.children}</Route>
    
  );
};
*/
export default PrivateRoute