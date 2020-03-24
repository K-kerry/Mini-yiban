var http=require('http')
var fs = require('fs')

var server = http.createServer(function () {
})

server.on('request', function (req, res) {
  fs.readFile('./index.json', 'utf8',function (err, data) {
    if (err) {
        return res.end('404')
    }
    res.end(data)
  })
})

server.listen(9090, function () {
    console.log('启动成功');
})

console.log('Server running at http://localhost:9090');