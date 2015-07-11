let http = require('http');

const IP = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const PORT = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(PORT, IP, function() {
  console.log(`Listening on ${IP}:${PORT}`);
});
