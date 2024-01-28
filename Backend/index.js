const express = require('express');
const chats = require('./Data/data');
const dotenv = require('dotenv');
const app = express();


dotenv.config();


const PORT = process.env.PORT || 3000

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


app.listen(PORT, console.log('Server running on PORT :',PORT))