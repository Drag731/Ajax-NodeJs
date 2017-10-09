const http = require('http');
const fs = require('fs');

const public = require('./routes/public');
const home = require('./routes/home');

http.createServer((req, res) => {

    if (req.url.match(/\.(html|css|js|jpg)$/)) {
        public(req, res);
    } else if (req.url === '/') {
        home(req, res);
    } 

}).listen(3000, () => console.log('Server works'));