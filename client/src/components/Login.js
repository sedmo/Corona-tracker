import React from 'react';
import '../css/Login.css'
import '../css/App.css'
import { ReactComponent as Logo} from '../img/Logo_CORONATRACKER_Logo.svg'
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg'
import Button from 'react-bootstrap/Button';

function Login(props) {
    const { handleSignIn } = props;
    return (
        <div className="Login">
            <Logo className="LoginLogo"/>
            <TextLogo className="TextLogo"/>
            <p className="ShortDescriptionText">
                Your health app to <b>monitor</b> flu-like symptoms, <b>connect</b> to telehealth doctors in your area and <b>discover</b> resources close to you.
            </p>
            <Button className="btn-primary" onClick={handleSignIn}>Hello</Button>
        </div>
    );
}

export default Login;
