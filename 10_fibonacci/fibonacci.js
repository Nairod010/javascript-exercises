const fibonacci = function(num) {
    let array = [1,1] 
    if(num == 1 || num == 2){
        return 1
    }else if(num == 0){
        return 0
    }else if(num < 0){
        return "OOPS"
    }else{
        for(let i = 2; i <= num; i++){
            array[i] = array[i-1] + array[i-2] 
        };
        return array[num-1]
    };
};

// Do not edit below this line
module.exports = fibonacci;
