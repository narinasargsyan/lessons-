const http = require('http');
const server1 = http.createServer((req,res) => {
   res.setHeader
   if(req.url === '/hello'){
      res.statusCode = 200;
      res.setHeader('content-type','text/plain');
       res.end('hi')
   }else if (req.url === '/bye'){
      res.statusCode = 200;
      res.setHeader('content-type','application/json');
      res.end(JSON.stringify({a:1}))
   }else res.end('gft')
   
})

server1.listen('5050','localhost',() =>{
   console.log('Server Working')
})
