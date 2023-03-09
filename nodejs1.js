const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const requestListner=function(req,res){
    res.ststusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('hello world\n welcome to node js');
  }
    const server=http.createServer(requestListner);
    server.listen(port,hostname);