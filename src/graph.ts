export class Graph {
    private nodes: Map<String, any>;
    private edges: Map<String, String[]>;

    constructor() {
        this.nodes = new Map();
        this.edges = new Map();
    }

    public addNode(name: String, node: any) {
        this.nodes.set(name, node);
        this.edges.set(name, []);
    }

    public addEdge(source: String, target: String) {
        const sourceEdges = this.edges.get(source);
        if (sourceEdges) {
            sourceEdges.push(target);
        } else {
            console.log(`Nó ${source} não foi encontrado.`);
        }
    }

    public getAdjacentNodes(node: String) {
        return this.edges.get(node) || [];
    }

    public getNode(name: String) {
        return this.nodes.get(name);
    }
}
