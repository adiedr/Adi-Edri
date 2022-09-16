
var http =require('http');
var port = 8080;
http.createServer(
    function (req,res){
        res.write();
        res.end();
    }
).listen(port);

/*var http =require('http');
var port = 8080;
var fs = require('fs');
http.createServer(
    function (req,res){
        fs.readFile('',function(err,data){
            res.write(data);
           return res.end();
        })
    }
).listen(port);*/
