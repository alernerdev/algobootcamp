// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 'marker'];
    const widths = [0];

    /* do the breadth first traversal, but add a 
        marker at the end of each level
    */
    while (arr.length > 1) { // is marker the only thing thats left?
        let elem = arr.shift();
        if (elem === 'marker') {
            // starting a new level
            widths.push(0);
            arr.push('marker');
        } else {
            // on the same level, keep incrementing the counter
            arr.push(...elem.children);
            widths[widths.length - 1]++;
        }
    }

    return widths;
}

module.exports = levelWidth;