/*
check to see of 2 strings are anagrams of each other.
they are anagrams if they use the same letters and in the same qty

anagrams('RAIL! SAFETY!', 'fairy tails') -> true
spaces, capitalization and punctuation are not counted
*/

function anagrams(stringA, stringB) {
    if (!stringA || !stringB)
        return false;

    return cleanString(stringA) === cleanString(stringB);
}

// convert the string into array, sort it, and combine back
function cleanString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join();  
}

 
/* function anagrams(stringA, stringB) {
    if (!stringA || !stringB)
        return false;

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

    const charMapA = buildCharMap(stringA);
    const charMapB = buildCharMap(stringB);
 
    if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
        return false;

    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char])
            return false;
    }
    return true;
}

function buildCharMap(string) {
    const charMap = {};

    for (let char of string) {
        if (charMap[char] == undefined) {
            charMap[char] = 1;
        } else {
            charMap[char] = charMap[char] + 1;
        }
    }

    return charMap;
}
 */
module.exports = anagrams;