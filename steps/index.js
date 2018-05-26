// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n, row=0, stair='') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row+1); // start a new row
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair); // same row is passed in again, but a growing stair
}

// function steps(n) {
//     // think of it as a square matrix
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }

//         console.log(stair);
//     }
// }

// function steps(n) {
//     for (let i=1; i<=n; i++) {
//         let pounds = i;
//         let spaces = n - i;

//         let stair = '';
//         for (let k = 0; k < pounds; k++) {
//             stair += '#';
//         }
//         for (let k = 0; k < spaces; k++) {
//             stair += ' ';
//         }

//         console.log(stair);
//     }
// }

module.exports = steps;