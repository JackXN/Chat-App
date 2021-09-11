import React from 'react';
import "../Styles/Login.css";
import { Button } from '@material-ui/core';
import {auth,provider} from '../firebase';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer';
import Logo from '../Assets/Images/logo-final@2x.png'
import GitHubIcon from '@material-ui/icons/GitHub';

function Login() {

const [state, dispatch] = useStateValue();

const signIn = (e) => {
auth
.signInWithPopup(provider)
.then((result) => {
    console.log('setuser',result);
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user
    })
    
})
.catch((error) => {
    alert(error.message)
})
}
    return (
        <>
        <div className='login_buttons'>
        <div clasName='login_buttons_left'>
<GitHubIcon className='github'/>
            </div>
            <div className='login_buttons_right'>
        <Button className='sign_up'>Sign Up</Button>
        </div>
    </div>
        <div className='login'>
            <div className='login_container'>
            <img src={Logo} alt='communiti logo' class='communiti'/>
        <h1>communiti</h1>
<form className='form_form'> 
<hr/>
<label htmlFor='email'>
    Email Address: 
<input className='login_input' placeholder= 'demo@gmail.com' type='text' />
</label>
<hr/>
<label htmlFor='password'>
 Password: 
<input className='login_input' type='password' placeHolder='*********'/>
</label>
<hr/>
</form>
<Button onClick={signIn} className='google_button'>Sign In With Google</Button>
<footer>
    <h3>Copyright @2021 communiti. All Rights Reserved.</h3>
</footer>
</div>

 </div>
 </>

    )
}

export default Login
