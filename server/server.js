require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require("node-fetch");
const db = require('./utils/db');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/wikisearch/title', async(request, response) => {
    const title = request.body.title;
    try{
        fetch(`https://wikipedia.org/w/api.php?&action=query&format=json&list=search&continue=-%7C%7C&utf8=1&srsearch='${title}'&sroffset=10`)
        .then(res => res.json())
        .then(res => response.send(res));
    }catch(err){
        console.log(err);
    }
    
});

app.post('/api/Login',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlInsert = `SELECT * FROM users WHERE username = ? AND password = ?`;
    try{
        const data = await db.execute(sqlInsert, [username, password]);
        res.send(data[0]);
    }catch(err){
        console.log(err);
    };
});

app.post('/api/Register',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlInsert = `INSERT INTO users (username, password) VALUES (?, ?)`;
    try{
        const data = await db.execute(sqlInsert, [username, password]);
        res.send(data[0]);
    }catch(err){
        console.log(err);
    };
});

app.post('/api/Projects', async (req, res) => {
    const userId = req.body.userId;
    const sqlInsert = `SELECT * FROM projects WHERE userId = ?`;
    try{
        const data = await db.execute(sqlInsert, [userId]);
        res.send(data[0]);
    }catch(err){
        console.log(err);
    }
});


app.use(express.static(path.join("public")));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT|| 3001;
app.listen(port, () => {
    console.log(`Runing on port ${port}`);
});