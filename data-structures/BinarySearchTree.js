class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } else {
            let current = this.root
            while (current) {
                if (val < current.val) {
                    if (current.left) {
                        current = current.left
                    } else {
                        current.left = newNode
                        // console.log('insert left')
                        return this
                    }
                } else if (val > current.val) {
                    // console.log('right')
                    if (current.right) {
                        current = current.right
                    } else {
                        current.right = newNode
                        // console.log('insert right')
                        return this
                    }
                } else {
                    return undefined
                }
            }
        }
    }

    find(val) {
        if (this.root === null || val === undefined) return undefined
        let current = this.root
        while (current) {
            if (val < current.val) {
                current = current.left
            } else if (val > current.val) {
                current = current.right
            } else {
                return current
            }
        }
        return undefined
    }


    bfs() {
        const queue = new Queue()
        const traversed = []
        queue.enqueue(this.root)
        while (queue.length) {
            const removedNode = queue.dequeue()
            traversed.push(removedNode.val)
            if (removedNode.left) {
                queue.enqueue(removedNode.left)
            }
            if (removedNode.right) {
                queue.enqueue(removedNode.right)
            }
        }
        return traversed
    }

    dfsPreOrder() {
        const data = []
        function traversed(node) {
            data.push(node.val)
            if (node.left) traversed(node.left)
            if (node.right) traversed(node.right)
        }
        traversed(this.root)
        return data
    }

    dfsPostOrder() {
        const data = []
        function traversed(node) {
            if (node.left) traversed(node.left)
            if (node.right) traversed(node.right)
            data.push(node.val)
        }
        traversed(this.root)
        return data
    }

    dfsInOrder() {
        const data = []
        function traversed(node) {
            if (node.left) traversed(node.left)
            data.push(node.val)
            if (node.right) traversed(node.right)
        }
        traversed(this.root)
        return data
    }

}

//             8
//         4       16
//     3       5         32
// 2    

const bst = new BinarySearchTree()
bst.insert(8)
bst.insert(4)
bst.insert(16)
bst.insert(32)
bst.insert(3)
bst.insert(2)
bst.insert(5)

console.log("BFS: ", bst.bfs())
console.log("dfsPreOrder", bst.dfsPreOrder())
console.log("dfsPostOrder", bst.dfsPostOrder())
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue)
