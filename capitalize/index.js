// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



function capitalize(str) {
    // if the latter to the left is ' ', capitalize the current letter
    let result = str[0].toUpperCase();

    for (let i=1; i<str.length; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;
}

module.exports = capitalize;

// function capitalize(str) {
//     const words = [];
//     for (let word of str.split(' ')) {
//         // slice from 1 to the end of the word
//         let capitalized = word[0].toUpperCase() + word.slice(1);
//         words.push(capitalized);
//     }

//     return words.join(' ');
// }