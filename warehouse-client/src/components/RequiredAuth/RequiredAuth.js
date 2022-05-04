import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSendEmailVerification,} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const RequiredAuth = ({children}) => {
    const[user,loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();
    if(loading)
    {
      return <Loading/>;
    }
  if(!user){
     return <Navigate to ='/login' state={{from:location}} replace ></Navigate>
  }
  if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
    return <div> 
      <h3 className='text-danger'> your email is not verified!!</h3>
      <button onClick={ async () => {
          await sendEmailVerification();
         toast('Sent email');
        }}> verify email</button>
    </div>;
  }
    return children;
};

export default RequiredAuth;