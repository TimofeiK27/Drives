class Node {
    constructor(name, neighbors) {
        this.name = name
        this.neighbors = neighbors
    }
    get name(){
        return this.name
    }
    get neighbors() {
        return this.neighbors
    }
    set addDrive(drive) {
        this.neighbors.push(drive)
    }

}
class Graph {
    constructor(){
        this.nodes = []
        this.size = 0
    }
    get size(){
        return this.size;
    }
}

Alon = new Node("Alon",[])
Tim = new Node("Tim",[])
Shoham = new Node("Ahogan",[])
Guy = new Node("Guy",[])
Gilad = new Node("Ahogan",[])
Lion = new Node("Lion",[])

const printGraph = (graph, visited) => {
    visited = Array.size(graph.size()).fill(0)
    q = [node]
    while(!q.isEmpty()){

        let curr = q.pop()



    }


}


