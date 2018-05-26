// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }   
    
    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }   
    
    // remove node with the matching data
    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Breadth First
    /* takes a function that gets called with
    every node in the tree*/
    /* - while
    take a node, put it in the array
    while there are elements in the array, take out the first, get its children
    and stick them in the array*/
    traverseBF(func) {
        const arr = [this.root];

        while (arr.length) {
            // get first element
            let elem = arr.shift();
            // call the function
            func(elem);
            // .. and add the children back onto the array
            arr.push(...elem.children);
        }
    }

    // Depth first
    traverseDF(func) {
        const arr = [this.root];
        while (arr.length) {
            // get first element
            let elem = arr.shift();

            // put children on the front of the array
            arr.unshift(...elem.children);
            func(elem);
        }
    }
 }

module.exports = { Tree, Node };