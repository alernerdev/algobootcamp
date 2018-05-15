function reverse(str) {
    return str.split('')
        .reduce(function(reverse, char) {
            return char + reverse;
        }, '');
}

module.exports = reverse;

/*
function reverse(str) {
    return str.split('').reverse().join('');
}
*/

/*
function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
*/
