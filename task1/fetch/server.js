const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile('index.html', (err, content) => {
        if (err) throw err;

        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end(decodeURIComponent(content));
    });

}).listen(3000, () => console.log('Сервер работает'));