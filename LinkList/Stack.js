class StackNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.length = 0
    }

    pop() {
        if (!this.top) return undefined
        const removedNode = this.top
        this.top = this.top.next
        this.length--
        return removedNode.val
    }

    push(val) {
        const newNode = new StackNode(val)
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
}
