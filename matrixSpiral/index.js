// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // all arrays are created upfront

    const results = [];
    let value = 1; // values to fill the matrix with

    // each row is a separate array 
    for (let i = 0; i<n; i++) {
        results.push([]);
    }

    let startRow = 0, endRow = n-1;
    let startColumn = 0, endColumn = n-1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // top row
        for (let i = startColumn; i<=endColumn; i++) {
            results[startRow][i] = value;
            value++;
        }
        startRow++;

        // rightmost column
        for (let i = startRow; i<=endRow; i++) {
            results[i][endColumn] = value;
            value++;
        }
        endColumn--;

        // bottom row
        for (let i=endColumn; i>=startColumn; i--) {
            results[endRow][i] = value;
            value++;
        }
        endRow--;

        // leftmost column
        for (let i=endRow; i>=startRow; i--) {
            results[i][startColumn] = value;
            value++;
        }
        startColumn++;
    }

    return results;
}

module.exports = matrix;