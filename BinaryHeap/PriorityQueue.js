// PreorityQueue insert Olog(n) (log base 2 n)
// removal also hv Olog(n)

// PriorityQueue is min binary tree but have node with priority values

class Node {
    constructor(val, priority = 100) {
        this.val = val;
        this.priority = priority
    }
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode)
        let currentIndex = this.values.length - 1
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2)
            const parentPriority = this.values[parentIndex].priority
            if (parentPriority <= priority) return this
            swap(this.values, parentIndex, currentIndex)
            currentIndex = parentIndex
        }
        return this
    }

    showQueue() {
        return this.values.map(e => e.priority)
    }

    dequeue() {
        if (this.values.length === 0) return undefined
        let currentIndex = 0
        swap(this.values, 0, this.values.length - 1)
        const removeElement = this.values.pop()
        while (true) {
            // console.log("level", this.showQueue())
            if (this.values.length === 0) return removeElement
            const currentPriority = this.values[currentIndex].priority
            const leftChildIndex = 2 * currentIndex + 1
            const rightChildIndex = 2 * currentIndex + 2
            const valuesLength = this.values.length
            let swapIndex = null
            if (leftChildIndex <= valuesLength - 1) {
                if (this.values[leftChildIndex].priority < currentPriority) {
                    swapIndex = leftChildIndex
                }
            }
            if (rightChildIndex <= valuesLength - 1) {
                if (this.values[rightChildIndex].priority < currentPriority &&
                    this.values[rightChildIndex].priority < this.values[leftChildIndex].priority
                ) {
                    swapIndex = rightChildIndex
                }
            }
            if (swapIndex === null) return removeElement

            swap(this.values, swapIndex, currentIndex)
            currentIndex = swapIndex
        }
    }

}

// const priorityQueue = new PriorityQueue()
// priorityQueue.enqueue('A', 20)
// priorityQueue.enqueue('B', 30)
// priorityQueue.enqueue('C', 10)
// priorityQueue.enqueue('D', 50)




// console.log(priorityQueue.values)