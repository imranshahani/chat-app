const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const {Server} = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server,{
    cors : {
        origin : "http://localhost:3500",
        methods : ["get", "post"],
    }
});

io.on("connection",(socket)=>{
    console.log(socket.id)
})

io.on("disconnect",(socket)=>{
    console.log("user disconnect", socket.id)
})

server.listen(3500,()=>{
    console.log("welcome to start server");
})