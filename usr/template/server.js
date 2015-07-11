'use strict';

let http = require('http');

const IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;

http.createServer(function (req, res) {
  let body = 'Welcome to io.js on OpenShift!\n\nEverything seems to be in order.\n\nRunning io.js:';
  for (let v in process.versions) { body += `\n- ${v}: ${process.versions[v]}`; }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(body);
}).listen(PORT, IP, function() {
  console.log(`Listening on ${IP}:${PORT}`);
});
