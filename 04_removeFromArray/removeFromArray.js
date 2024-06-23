const removeFromArray = function(array, ...items) {
   return array.filter(removeValues => {
       return !items.includes(removeValues);
   });
};




// Do not edit below this line
module.exports = removeFromArray;
