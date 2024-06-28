const palindromes = function (word) {
    const alphabetFilter = "abcdefghklmnopqrstvxyz1234567890"
    const cleannedString = word
        .toLowerCase()
        .split('')
        .filter((character) => alphabetFilter.includes(character))
        .join('');

    const reverseString = cleannedString.split('').reverse().join('');

    return cleannedString === reverseString
};

// Do not edit below this line
module.exports = palindromes;
