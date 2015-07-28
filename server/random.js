var randomNumber = function (min, max) {
    var ranNum = Math.floor(Math.random() * (1 + max - min) + min);
    return ranNum;
};

module.exports = randomNumber;