class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let prev = this.head
        let current = this.head;
        if (this.head === this.tail) {
            // only one node
            this.head = null
            this.tail = null
        } else {
            for (; current.next; prev = current, current = current.next);
            prev.next = null;
            this.tail = prev
        }
        this.length--
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        const current = this.head
        if (this.head === this.tail) {
            this.tail = null
        }
        this.head = this.head.next
        this.length--;
        return current
    }

    unshift(val) {
        const newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        // lest hv single node
        if (!this.head.next) {
            this.tail = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length || !this.head) return null
        for (var current = this.head, currentIndex = 0; current && index !== currentIndex; current = current.next, currentIndex++);
        return current
    }

    set(newValue, index) {
        const foundNode = this.get(index)
        if (!foundNode) return false
        foundNode.val = newValue
        return true
    }

    insert(setIndex, value) {
        if (setIndex < 0 || setIndex > this.length) {
            return false
        }
        if (setIndex === 0) {
            this.unshift(value)
            return true
        }
        if (setIndex === this.length) {
            this.push(value)
            return true
        }
        const prev = this.get(setIndex - 1)
        const newNode = new Node(value)
        newNode.next = prev.next
        prev.next = newNode
        this.length++
        return true
    }

    remove(removeIndex) {
        if (removeIndex < 0 || removeIndex >= this.length) return undefined
        if (removeIndex === 0) return this.shift()
        if (removeIndex === this.length - 1) return this.pop()
        const prev = this.get(removeIndex - 1)
        const removeNode = prev.next
        prev.next = prev.next.next
        removeNode.next = null
        this.length--
        return removeNode
    }

    reverse() {
        if (this.length <= 1) return this
        let prev = null, current = this.head, next = current.next;
        this.head = this.tail
        this.tail = current
        while (current) {
            current.next = prev;
            prev = current
            current = next
            if (current) {
                next = next.next
            } else {
                this.head = prev
            }
        }
        return this
    }

    print() {
        const arr = []
        for (var current = this.head; current; current = current.next) {
            arr.push(current.val)
        }
        return arr
    }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20)
console.log(singlyLinkedList.print())
// console.log(singlyLinkedList)
// singlyLinkedList.push(5).push(10).push(15).push(20);
// singlyLinkedList.insert(2, 12)            // true
// singlyLinkedList.insert(100, 12);            // false
// console.log(singlyLinkedList.print())

// singlyLinkedList.head.val //                5
// singlyLinkedList.head.next.val // 10
// singlyLinkedList.head.next.next.val            // 12
// singlyLinkedList.head.next.next.next.val //                15
// singlyLinkedList.head.next.next.next.next.val // 20
// singlyLinkedList.insert(5, 25);            // true
// singlyLinkedList.head.next.next.next.next.next.val            //25
// singlyLinkedList.tail.val //                25
