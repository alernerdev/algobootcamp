// returns bool -- is passed in string a palindrome ?

// for every character, go from both ends inward and compare them.
// this is an overkill since we only need to compare half the string.
function palindrome(str) {
    return str.split('')
        .every((char, index) => {
            return char === str[str.length - 1 - index];
        });
}

module.exports = palindrome;

/*
function palindrome(str) {
    return str === str.split('').reverse().join('');
}
*/
