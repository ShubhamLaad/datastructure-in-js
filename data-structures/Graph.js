class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(e => e !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(e => e !== vertex1)
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(element => {
            this.adjacencyList[element] = this.adjacencyList[element].filter(e => e !== vertex)
        });
        delete this.adjacencyList[vertex]
        return vertex
    }

    depthFirstRecursive(start) {
        const visitedVertex = {}
        function travered(vertex) {
            if (!vertex) return null
            visitedVertex[vertex] = true
            this.adjacencyList[vertex].forEach(e => {
                if (!visitedVertex[e]) {
                    travered.call(this, e)
                }
            })
        }
        travered.call(this, start)
        return Object.keys(visitedVertex)
    }

    depthFirstIterative(start) {
        if (!start) return null
        const visitedVertex = {}
        const stack = [start]
        while (stack.length > 0) {
            const currentVertex = stack.pop()
            visitedVertex[currentVertex] = true
            //loop for currentVertex edges
            this.adjacencyList[currentVertex].forEach(vertex => {
                // check vertex not present in stack and in visited then push in stack
                if (!visitedVertex[vertex] && !stack.includes(vertex))
                    stack.push(vertex)
            })
            //loop untill stack is empty
        }
        return Object.keys(visitedVertex)
    }

    breadthFirst(start) {
        if (!start) return null
        const visitedVertex = {}
        const queue = [start]
        while (queue.length > 0) {
            console.log(queue)
            const currentVertex = queue.shift()
            visitedVertex[currentVertex] = true
            //loop for currentVertex edges
            this.adjacencyList[currentVertex].forEach(vertex => {
                // check vertex not present in queue and in visited then push in queue
                // !queue.includes(vertex) condition stop extra loop
                if (!visitedVertex[vertex] && !queue.includes(vertex))
                    queue.push(vertex)
            })

        }
        return Object.keys(visitedVertex)
    }
}


const g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'C')
g.addEdge('E', 'F')

console.log(g.adjacencyList)
console.log("g.breadthFirst('A')", g.breadthFirst('A'))
console.log("g.depthFirstIterative('A')", g.depthFirstIterative('A'))

// > for breath first use queue
// > for depth first use stack