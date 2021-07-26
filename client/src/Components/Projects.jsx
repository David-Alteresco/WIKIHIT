import React, { useState } from 'react';
import env from "react-dotenv";
import axios from "axios";
import Card from './Card';
import NewCard from './NewCard';
import { Grid } from '@material-ui/core';
import { view } from 'react-easy-state';
import { projects } from '../stores';
import AppBar from './AppBar';

export default view(() => {
    const load = async () => {
        try{
            const userId = sessionStorage.getItem("userId");
            const getUserData = await axios.post(`${process.env.REACT_APP_API_KEY}api/Projects`,{ userId: userId});
            projects.isInLocalStorage = false;
            for (let i = 0; i < getUserData.data.length; i++) {
                (projects.data).push(getUserData.data[i]);
            }
        }catch(err){
            console.log(err);
        }
    };

    if(projects.isInLocalStorage){
        load();
    }
    
return (
    <div>
        <AppBar/>
        <Grid container>
        {(projects.data).map(obj => {
            return <grid item md={2} id={`cardId-${obj._id}`}>
                <Card idNum={obj._id} title={obj.projectName} status= {obj.status} />
            </grid>
        })}
        </Grid>  
    </div>
)});

