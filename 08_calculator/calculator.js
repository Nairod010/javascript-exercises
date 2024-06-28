const add = function(a, b) {
    return a + b	
};

const subtract = function(a,b) {
    return a - b	
};

const sum = function(arr) {
   if(arr.length === 0){
       return 0;
   }else if(arr.length === 1){
        return arr[0];
   }else if(arr.length >= 2){
       let length = arr.length;
       let sum = 0;
       for(let i = 0; i < length; i++){
            sum += arr[i];
       };
       return sum;
   };
	
};

const multiply = function(arr) {
    if(arr.length === 2){
        return arr[0] * arr[1]
    }else if(arr.length > 2){
        let length = arr.length;
        let result = 1;
        for(let i = 0; i< length; i++){
            result *= arr[i]
        };
        return result   
    };
};

const power = function(a,b) {
    let result = a;
    for(let i = 1; i < b; i++){
        result *= a 
    };
    return result
};

const factorial = function(a) {
    if(a === 0) return 1;
    let start = a;
    let result = 1;
    while(start > 0){
        result *= start; 
        start -= 1;
    }
    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
