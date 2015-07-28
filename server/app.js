var http = require('http');
//var numberMessage = require('./random');
//var dollar = require('./dollar');
var outPut = require('./output');

http.createServer(function(request, response){
    response.writeHead(200);
   // response.write("This is working!");
    response.write(outPut.accountMessage());
    response.write(outPut.incomeResult());
    //response.write(results.getResults(100, 1000000));
   // console.log(numberMessage(100, 1000000));

    //console.log(outPut.accountMessage());
    //console.log(outPut.incomeResult());
    response.end();
}).listen(3000);

console.log("Listening on port 3000!");