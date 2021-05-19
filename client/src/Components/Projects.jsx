import React, { useState } from 'react';
import env from "react-dotenv";
import axios from "axios";
import Card from './Card';
import NewCard from './NewCard';
import { Grid } from '@material-ui/core';

function Projects() {
    const [userProjectList, setUserProjectList] = useState([]);
    const [updateSessionStorage, setUpdateSessionStorage] = useState(true);
    const load = async () => {
        try{
            const userId = sessionStorage.getItem("userId");
            const getUserData = await axios.post(`${env.API_URL}api/Projects`,{ userId: userId});
            setUserProjectList(getUserData.data);
            setUpdateSessionStorage(false);
        }catch(err){
            console.log(err);
        }
    };
    if(updateSessionStorage){
        load();
    }
    
        
    return (
    <div>
        <Grid container>
        <grid item md={4}>
                <NewCard />
        </grid>
        {userProjectList.map(obj => {
            return <grid item md={4}>
                <Card/>
            </grid>
        })}
        </Grid>  
    </div>
)};

export default Projects;
