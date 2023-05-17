import { Graph } from "./graph";
import { Department } from "./department";
import { Manager } from "./manager";
import { Employee } from "./employee";

const graph = new Graph();

// Adicionar departamentos
graph.addNode("TI", new Department("TI"));
graph.addNode("RH", new Department("Department 2"));

// Adicionar gerentes
graph.addNode("Carlos", new Manager("Carlos", graph.getNode("TI")));
graph.addNode("Moreno", new Manager("Moreno", graph.getNode("RH")));

// Adicionar colaboradores
graph.addNode("Jorge", new Employee("Jorge", graph.getNode("Carlos"), graph.getNode("TI")));
graph.addNode("Kauan Murata", new Employee("Kauan Murata", graph.getNode("Moreno"), graph.getNode("RH")));

// Conectar os nós
graph.addEdge("TI", "Carlos");
graph.addEdge("RH", "Moreno");
graph.addEdge("Carlos", "Jorge");
graph.addEdge("Moreno", "Kauan Murata");

// Verificar se os nós foram adicionados corretamente
console.log(graph.getNode("TI")); 
console.log(graph.getNode("Carlos"));
console.log(graph.getNode("Jorge")); 

// Verificar se as arestas foram criadas corretamente
console.log(graph.getAdjacentNodes("TI"));
console.log(graph.getAdjacentNodes("Carlos")); 
console.log(graph.getAdjacentNodes("Jorge")); 