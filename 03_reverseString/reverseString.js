const reverseString = function(string = "hello") {
    let reverse = "";
    let length = string.length;
    for (i = length; i >= 0; i--) {
        reverse += string.substr(i ,1);
    };
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
p
