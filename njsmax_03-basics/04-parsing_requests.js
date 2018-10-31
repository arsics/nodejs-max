const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/message" && method === 'POST') {
        const requestBody = []; // request data is processed in chunks
        req.on('data', (dataChunk) => {
            console.log('Chunk:' + dataChunk);
            requestBody.push(dataChunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(requestBody).toString();
            console.log(parsedBody);
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/end'); // just to indicate that we redirected
        res.end();
        return;
    }
    else {
        createPageWithInputForm(res);
    }
});

server.listen(3000);

function createPageWithInputForm(res) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello!</title></head>');
    res.write('<body>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

function processPostRequest(res) {
    res.write('<html>');
    res.write('<head><title>Hello!</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>');
    res.write('</html>');
    res.end();
}

