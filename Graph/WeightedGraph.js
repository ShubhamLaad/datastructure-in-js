// Note: import of priorityQueue before WeightedGraph file in index.html
class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }

    dijkstra(start, end) {
        const visited = {}
        const previousVertex = {}
        const distance = {}
        const priorityQueue = new PriorityQueue()

        //Initialization
        for (const vertexNode in this.adjacencyList) {
            if (this.adjacencyList.hasOwnProperty(vertexNode)) {
                if (vertexNode === start) {
                    distance[vertexNode] = 0
                    priorityQueue.enqueue(vertexNode, 0)
                } else {
                    distance[vertexNode] = Infinity
                    priorityQueue.enqueue(vertexNode, Infinity)
                }
                previousVertex[vertexNode] = null
            }
        }

        // loop through all shortest vertex
        while (priorityQueue.values.length) {
            // Get sortest vertex
            const sortestVertex = priorityQueue.dequeue() //{val, priority}

            // output condition
            if (sortestVertex.val === end) {
                console.log(previousVertex, priorityQueue, distance)
                let current = end
                let traverse = []
                while (current) {
                    traverse = [current, ...traverse]
                    current = previousVertex[current]
                }
                return {
                    path: traverse,
                    distance: sortestVertex.priority
                }
            }

            // itrate adjecent vertex
            this.adjacencyList[sortestVertex.val].forEach(vertex => {
                // vertex = {node: , weight:}
                // priorityQueueNOde = {val: , priority:}
                const vertexNode = vertex.node
                if (!visited[vertexNode]) {
                    // get old value from distance
                    const oldDistanceOfVertex = distance[vertexNode]
                    // find distance from start
                    // Distance from start = sum of currentEdge and sortextVertex
                    const newDistanceOfVertex = vertex.weight + sortestVertex.priority
                    // if newDistanceOfVertex is min to oldDistanceOfVertex then change node in previousVertex and also change in proporty queue
                    if (newDistanceOfVertex < oldDistanceOfVertex) {
                        // TODO: We should not use this function
                        priorityQueue.enqueue(vertexNode, newDistanceOfVertex)
                        distance[vertexNode] = newDistanceOfVertex
                        previousVertex[vertexNode] = sortestVertex.val
                    }
                }
            })
            visited[sortestVertex.val] = true
            // console.log(JSON.stringify(previousVertex), JSON.stringify(priorityQueue.values))

        }
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log(graph.adjacencyList)


console.log(graph.dijkstra("A", "F"))


