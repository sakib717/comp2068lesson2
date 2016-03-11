"use strict";
var http = require('http');
var port = process.env.PORT || 7171;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello World\n");
}).listen(port);
//# sourceMappingURL=index.js.map