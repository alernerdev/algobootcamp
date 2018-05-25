const Queue = require('../Queue');

class Stack {
    constructor() {
        this.q1 = new Queue();
        this.q2 = new Queue();
    }

    push(item) {
        this.q1.add(item);
    }

    pop() {
        let lastItem = undefined;
        while (this.q1.peek()) {
            lastItem = this.q1.remove();
            this.q2.add(lastItem);
        }

        // lastItem contains what needs to be popped
        let item;
        while (this.q2.peek()) {
            item = this.q2.remove();
            if (item !== lastItem) {
                this.q1.add(item);
            }
        }

        return lastItem;
    }

    peek() {
        let lastItem = undefined;
        while (this.q1.peek()) {
            lastItem = this.q1.remove();
            this.q2.add(lastItem);
        }

        // lastItem contains what needs to be popped
        let item;
        while (this.q2.peek()) {
            item = this.q2.remove();
            this.q1.add(item);
        }

        return lastItem;
    }
}

module.exports = Stack;