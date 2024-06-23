const sumAll = function(firstValue, secondValue) {
    let sum = 0;
    let start
    let end
    if (firstValue < secondValue) {
        start = firstValue
        end = secondValue
    } else {
        start = secondValue
        end = firstValue
    };
    if (typeof(end) != "number"){
        return "ERROR"
    };
    if (typeof(start) != "number"){
        return "ERROR"
    };
    if (start < 0 || end < 0) {
        return "ERROR"
    };
    for (i = start; i <= end; i++) {
        console.log(i);
        sum += i;
    };
    console.log(sum)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
