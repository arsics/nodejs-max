const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/message" && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY'); // parsing the input data is done in the next lesson
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
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
