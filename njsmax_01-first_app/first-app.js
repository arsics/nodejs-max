console.log('Hello from Node.js');

// *** save to disk

const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js');