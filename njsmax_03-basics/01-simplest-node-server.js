const http = require('http');

// function rqListener(req, res) { }
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url, req.method, req.headers);
    // process.exit(); - serve only one request, then shut down the server
});

server.listen(3000);