import React from 'react';
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"

export const AccountPage = () => {
    
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <h1>LIVE ORDER</h1>
            </div>
            <h2>Account</h2>
            <p>Login/Create Account to Manage Orders</p>
            <Button className="bg-warning" onClick={() => navigate("/LoginPage")}>Login</Button>
            <p className="justify-content-center">By clicking I accept to the 
                <span>Terms and conditions and Privacy Policy</span>
            </p>
            <hr />
            <Button className="bg-warning">OFFERS</Button>
            <Button className="bg-warning">SEND FEEDBACK</Button>
            <p>App version 5.0.4(7)</p>
        </div>
    );
};
