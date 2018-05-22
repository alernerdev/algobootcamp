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
        const node = new Node(data);

        if (this.head === null)
            this.head = node;
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    size() {
        if (this.head === null)
            return 0;

        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (this.head === null)
            return this.head;

        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head === null)
            return;

        let node = this.head;
        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null)
            return;

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
        
    }
}

module.exports = {Node, LinkedList}