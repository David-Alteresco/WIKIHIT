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


app.post('/api/Main',async (req, res) => {
    const projectId = req.body.projectId;
    const sqlInsert = `SELECT * FROM chartdata WHERE id = ?`;
    try{
        const data = await db.execute(sqlInsert, [projectId]);
        res.send(data[0]);
    }catch(err){
        console.log(err);
    };
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

app.put('/api/Main/saveChart',async (req, res) => {
    const nodes = req.body.nodes;
    const projectId = req.body.projectId;
    let nodesToString = '[';
   /*  nodes.map((node) => {
        nodesToString += node.toString();
    });
    nodesToString += ']'; */
    console.log(typeof(nodes));
    const nodesToSql = JSON.stringify(nodes);
    console.log(typeof(nodesToSql));
    const sqlInsert = "UPDATE chartdata SET data ='" + nodesToSql + "' WHERE id ='" + projectId + "'";
    try{
        const data = await db.execute(sqlInsert);
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


app.use(express.static(path.join("build")));

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Runing on port ${port}`);
});