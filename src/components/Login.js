import React from 'react';
import "../Styles/Login.css";
import { Button } from '@material-ui/core';

function Login() {
    return (
        <div className='login'>
            <div className='login_container'>
            <img src='https://avatars.githubusercontent.com/u/73765650?v=4' alt=''/>
        <h1>Sign In To Superizee Chat</h1>
<p>superizee.chat.com</p>
<Button>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
