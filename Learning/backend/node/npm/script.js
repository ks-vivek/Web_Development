const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('VIVEK SHARMA');
})

server.listen(4001);    