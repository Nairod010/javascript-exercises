const getTheTitles = function(books) {
    let array = []
    books.forEach(element => array.push(element.title));
    return array
};

// Do not edit below this line
module.exports = getTheTitles;
