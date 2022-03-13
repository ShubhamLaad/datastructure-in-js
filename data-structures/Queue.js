class QueueNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    dequeue() {
        if (!this.first) return undefined;
        if (this.first === this.last) {
            this.last = null
        }
        const removedNode = this.first
        this.first = this.first.next
        this.length--;
        return removedNode.val
    }

    enqueue(val) {
        const newNode = new QueueNode(val)
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++;
        return this;
    }
}