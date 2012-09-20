var port = 8081;
var connect = require('connect');
connect()
.use(connect.static(__dirname + '/'))
.listen(port);
console.log('OK');