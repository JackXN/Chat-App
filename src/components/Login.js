import React from 'react';
import "../Styles/Login.css";
import { Button } from '@material-ui/core';
import {auth,provider} from '../firebase';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';
function Login() {

const [state, dispatch] = useStateValue();

const signIn = (e) => {
auth
.signInWithPopup(provider)
.then(result => {
    console.log(result)
dispatch({
    type: actionTypes.SET_USER,
    user: result.user
})
})
.catch(error => {
    alert(error.message);
})
}
    return (
        <div className='login'>
            <div className='login_container'>
            <img src='https://avatars.githubusercontent.com/u/73765650?v=4' alt=''/>
        <h1>Sign In To Superizee Chat</h1>
<p>superizee.chat.com</p>
<Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
