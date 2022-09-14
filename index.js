const fs= require('fs');
const http =require('http');
let content='<h1> Hello World </h1>\n<p> This is Bharath Sai </p>'
fs.writeFile('index.html',content,err=>{
    console.log("file written")
});
const server=http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    const data = fs.readFileSync('./index.html','utf-8');
    res.end(data);
})
server.listen(5000,()=>{
    console.log("server is listening on 5000port")
})