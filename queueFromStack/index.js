// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('../stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(item) {
        this.stack1.push(item);
    }

    // pop all of values off the stack, and push them to stack 2
    // for safekeeping.  And afterwards, push them back into stack 1
    remove() {
        while(this.stack1.peek()) {
            const record = this.stack1.pop();
            this.stack2.push(record);
        }

        // so the record I want is at the top of stack 2
        const itemToReturn = this.stack2.pop();

        // and now restore stack one
        while(this.stack2.peek()) {
            const record = this.stack2.pop();
            this.stack1.push(record);
        }

        return itemToReturn;
    }

    peek() {
        while(this.stack1.peek()) {
            const record = this.stack1.pop();
            this.stack2.push(record);
        }

        // so the record I want is at the top of stack 2
        const itemToReturn = this.stack2.peek();

        // and now restore stack one
        while(this.stack2.peek()) {
            const record = this.stack2.pop();
            this.stack1.push(record);
        }

        return itemToReturn;
    }
}

module.exports = Queue;