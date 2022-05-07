import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SocialLogin.css';
import google from '../../assets/glogo (1).png'
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from,{replace:true});
      }
      let errorMsg ;
      if (error) {
          errorMsg = <div> <p className='text-danger'>Error: {error?.message}</p></div> 
        }
    return (
        <div>
          <button  onClick={()=>signInWithGoogle()}
        className='btn btn-primary d-block mt-2'>
            <img src={google} alt="pic" style={{width:"30px"}} />
           <span className='px-2'>Sign in with Google </span> 
        </button>
        {errorMsg}
        </div>
    );
};

export default SocialLogin;