function randomRangeNumber(minNumber, maxNumber) {

    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}

randomRangeNumber();

console.log(randomRangeNumber(2, 8));

module.exports = randomRangeNumber;