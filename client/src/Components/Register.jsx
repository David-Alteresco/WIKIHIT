import React, { useState } from "react";
import env from "react-dotenv";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () => {
        Axios.post(`${env.API_URL}api/Register`,{
            username: username, 
            password: password
        }).then( () => {
            alert('Success! Register');
        });
    };

    return (
    <div>
        <h1>Register</h1>
        <div className="form">
            <label>Email</label>
            <TextField type="email" name="email" onChange={(e) => setUsername(e.target.value)}>  
            </TextField>
            <label>password</label>
            <TextField type="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </TextField>
            <Button type="submit" variant="contained" color="primary" onClick={submit}>
            Login
            </Button>
        </div>    
    </div>
)};

export default Register;
