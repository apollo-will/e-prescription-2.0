import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux';

import { setMessages } from "../../reducers/messageDispatcher"
import { useReduxAction } from "../../hooks/useReduxAction";



const RoutePharmacistGuard = ({
    children,
}) => {
    const dispatchError = useReduxAction(setMessages)
    const user = useSelector(state => state.auth.authUser);

    

   
       if (user && user.role !== 'pharmacist') {
           dispatchError({type:'error', text:'Нямате права за достъп до този ресурс'});
           return <Navigate to="/" />;
       }

   
    
  

    return children ? children : <Outlet />
};

export default RoutePharmacistGuard