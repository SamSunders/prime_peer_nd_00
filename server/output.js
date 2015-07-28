var numberInput = require('./random');
var dollarInput = require('./dollar');

// Get the random number
var getResults = function(){
    //console.log();
    var income = dollarInput(numberInput(100, 1000000));
    return income;
}


var message = function(){
    return "Account Balance: \n";
};

exports.accountMessage = message;
exports.incomeResult = getResults;