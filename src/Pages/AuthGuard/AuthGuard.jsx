import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from '../../Context/IsAuth';
import toast from 'react-hot-toast';

function AuthGuard({children}) {

    let {isAuth} = useContext(authContext)
    
    if (isAuth) {
      return  children
      
    }else{
   
    return(
      <>
         {toast('login first', {
           icon: '👏',
          })}
          <Navigate to="/login" />

      </>
    )  
    }
 
}

export default AuthGuard