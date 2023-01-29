const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const server = express();

server.use(express.json());

server.use(cors());

server.use(morgan('tiny'));

server.get("/",(req,res)=>{
    res.send("HELLO WORLD!")
})

const port = process.argv[2] || 3004;

server.listen(port, async ()=>{
    try{
         console.log("server listening on port 3004");
    }
    catch(err){
        console.error(err.message);
    }
})