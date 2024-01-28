const express = require('express');
const chats = require('./Data/data');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();

app.use(cors());
dotenv.config();



app.get('/',(req, res)=>{
        res.send("Hello Niyad.....!")
    });
    
    app.get('/api/chat', (req, res)=>{
        res.send(chats);
    });
    
    app.get('/api/chat/:id', (req, res)=> {
        // console.log(req.params.id);
        const singleChat = chats.find((c)=>c._id === req.params.id);
        res.send(singleChat);
    });

    
    const PORT = process.env.PORT || 3000
    app.listen(PORT, console.log('Server running on PORT :',PORT))