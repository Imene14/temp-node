const http = require("http");
console.log("hello world");

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page");
    }
    else if(req.url === '/about'){
        res.end("Here is our short history");
    }
    else{
        res.end(`
        <h1>OOps !</h1>
        <p>We can't seem to find this page you are looking for</p>
        <a herf="/">back home</a>
        `)
    }
})

server.listen(5000);