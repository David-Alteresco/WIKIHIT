import React, { useState } from "react";
import env from "react-dotenv";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { Redirect } from "react-router-dom";


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');   
    const [password, setPassword] = useState('');
    const [userValidtionMessage, setUserValidtionMessage] = useState(''); 
    const [userId, setUserId] = useState(null); 
    const submit = async() => {
        
        try{
            const getUserData = await axios.post(`${env.API_URL}api/Login`,{ username: username, password: password});
            setUserId((getUserData.data[0]._id));
            setUserValidtionMessage(false);
            setIsLoggedIn(true);
        }catch(error){
            setUserValidtionMessage(true);
        }
        
    };

    if (isLoggedIn) {
        sessionStorage.setItem("userId", userId);
        return <Redirect to='/Projects'/>
    }

    return (
    <div>
        <h1>Login</h1>
        <div className="form">
            <label>Email</label>
            <TextField type="email" name="email" onChange={(e) => 
            {
                setUsername(e.target.value);
                setUserValidtionMessage(false);
            }}>  
            </TextField>
            <label>password</label>
            <TextField type="password" name="password" onChange={(e) => 
            {
                setPassword(e.target.value);
                setUserValidtionMessage(false);
            }}>
            </TextField>
            <div>
            {userValidtionMessage ? <Alert variant="outlined" severity="error" visibility= "none">Username or password incorrect</Alert>: null}
            </div>
            <Button type="submit" variant="contained" color="primary" onClick={submit}>
            GO
            </Button>
        </div>    
    </div>
)};

export default Login;