var convert = function(number){
        amount = "$" + number.toFixed(2).toString();
        return amount;
};

module.exports = convert;