const http = require ("http");

const fs = require("fs");


const mysever = http.createServer((req , res)=>{
    const log = `${Date.now()}: New Req recive\n`;
    fs.appendFile("log.txt", log, (err, data)=> {
        res.send("Hello From the Serve Agani!");
    })
   
});

mysever.listen(8000, ()=> 
console.log("server Stated!"));


