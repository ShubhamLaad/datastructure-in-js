function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        let currentIndex = this.values.length - 1
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2)
            const parent = this.values[parentIndex]
            if (parent >= val) return this
            swap(this.values, parentIndex, currentIndex)
            currentIndex = parentIndex
        }
        return this
    }

    getMaxIndex(i, j, k) {
        const { values } = this
        const [valueI, valueJ, valueK] = [values[i], values[j], values[k]]
        if (valueI > valueJ && valueI > valueK) {
            return i
        } else if (valueJ > valueI && valueJ > valueK) {
            return j
        }
        return k
    }

    removeMax() {
        if (this.values.length === 0) return undefined
        let currentIndex = 0
        swap(this.values, 0, this.values.length - 1)
        const removeElement = this.values.pop()
        while (true) {
            console.log("level", this.values)
            const leftChildIndex = 2 * currentIndex + 1
            // Check leaf node
            if (leftChildIndex >= this.values.length) return removeElement
            const rightChildIndex = 2 * currentIndex + 2
            // Max value and max index
            const maxValueIndex = this.getMaxIndex(currentIndex, leftChildIndex, rightChildIndex || -Infinity)
            // current and maxValue same then return
            if (maxValueIndex === currentIndex) return removeElement
            // swap with max value
            swap(this.values, maxValueIndex, currentIndex)
            currentIndex = maxValueIndex
        }
    }
}


const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(2)
maxBinaryHeap.insert(3)
maxBinaryHeap.insert(4)
maxBinaryHeap.insert(8)
maxBinaryHeap.insert(10)
maxBinaryHeap.insert(1)
maxBinaryHeap.insert(2)
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.removeMax())

// parent = floor((child - 1)/2)
//  IleftChildIndex = 2p + 1, rightChild = 2p + 2