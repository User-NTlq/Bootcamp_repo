const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;
    fs.appendFile("log.txt", log, (err,data) => {
        switch(req.url){
            case '/': res.end("Home ");
            break;
            case '/about': res.end("I am Spatika from Lumiq");
            break;
            default: res.end("404 Not Found");
        }
        // res.end("Server says Hello!");
    })
});

myServer.listen(8003,() => console.log("Server has started!"));