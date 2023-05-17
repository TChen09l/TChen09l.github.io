
const http = require('http');

const host = 'localhost';

const port = 3000;

const server = http.createServer((request, response) => {
    response.write("<h1 style='color: red; font-style; italic; text-decoration: underline' > Cloud Computing - GCH1101</h1>")
    response.end()
})

server.listen(port, () => {
    console.log("Web server is running at http://" + host + ':' + port)
})