import React from 'react';
import {auth, provider} from '../firebase-config';
import {signInWithPopup} from "firebase/auth";

function Login({setIsAuth}){

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then( (result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
        } )
    };

    return(
        <div className='loginPage'>
            <p>Sign In with Google to continue.</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}> Sign In </button>
        </div>
    );
}

export default Login;