class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        const removeNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            removeNode.prev = null
        }
        this.length--
        return removeNode
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        const removeNode = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        removeNode.next = null
        this.length--
        return removeNode
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        for (let i = 0, current = this.head; i < this.length; i++, current = current.next) {
            if (i === index) {
                return current
            }
        }
        return null
    }

    set(index, val) {
        const node = this.get(index)
        if (node) {
            node.val = val
            return true
        }
        return false
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false
        if (index === 0) {
            this.unshift(val)
        } else if (index === this.length) {
            this.push(val)
        } else {
            const nextNode = this.get(index)
            const prevNode = nextNode.prev
            const newNode = new Node(val)
            newNode.prev = prevNode
            newNode.next = nextNode
            prevNode.next = newNode
            nextNode.prev = newNode

            this.length++
        }
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift(index)
        if (index === this.length - 1) return this.pop(index)
        const removeNode = this.get(index)
        const prevNode = removeNode.prev
        const nextNode = removeNode.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        removeNode.next = null
        removeNode.prev = null
        this.length--
        return removeNode
    }

    reverse() {
        if (this.length <= 1) return this
        function changeNode(node) {
            [node.prev, node.next] = [node.next, node.prev]
            return node
        }
        this.tail = this.head
        let pre = this.head
        for (let current = this.head.next; current; current = current.next) {
            changeNode(pre)
            pre = current
        }
        this.head = changeNode(pre)
        return this
    }

    getValList() {
        const arr = []
        for (let current = this.head; current; current = current.next) {
            arr.push(current.val)
        }
        return arr
    }
}

let doublyLinkList = new DoublyLinkedList();
doublyLinkList.push(1)
doublyLinkList.push(2)
doublyLinkList.push(3)
console.log(doublyLinkList)
