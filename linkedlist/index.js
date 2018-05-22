class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;        
    }

    insertFirst(data) {
        // insertAt(data, 0)

        const node = new Node(data);

        if (this.head === null)
            this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    size() {
        if (this.head === null) {
            return 0;
        }

        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        // getAt(0)
        return this.head;
    }

    getLast() {
        // getAt(this.size() - 1)

        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }

            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null) {
            return;
        }

        let node = this.head;
        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null) {
            return;
        }

        if (this.head.next === null) {
            // this is a one node list.  So just kill the head.
            this.head = null;
            return;
        }

        // when you get to the end, you should have kept track of the node in front.
        let node = this.head.next;
        let previous = this.head;
        while (node.next !== null) {
            previous = node;
            node = node.next;
        }

        // node is looking at the last node
        previous.next = null;
    }

    insertLast(data) {
        const node = new Node(data);
        const lastNode = this.getLast();

        if (lastNode === null) {
            this.head = node;
            return;
        } else {
            lastNode.next = node;
        }
    }

    getAt(index) {
        // from this method, getFirst() is getAt(0)
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter == index) {
                return node;
            }

            counter++;
            node = node.next;

        }

        // if got to this point, node is null and we didnt get to the index
        // the caller was asking for
        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index ==0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    
    insertAt(data, index) {
        // from this method, insertFirst() is insertAt(0)
        
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // if index out of bounds, add it to the end
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach(func) {
        let count = 0;
        let node = this.head;
        while (node) {
            func(node, count);
            count++;
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = {Node, LinkedList}