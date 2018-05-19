function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char] == undefined) {
            charMap[char] = 1;
        } else {
            charMap[char] = charMap[char] + 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;