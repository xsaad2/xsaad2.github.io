function topsort(dependencies) {
  console.log("Dependencies in topsort function: ", dependencies);
  let sorted = [];
  let visited = new Set();
  let graph = createGraph(dependencies);

  for (let node of graph.nodes) {
    if (!visited.has(node)) {
      dfs(node, visited, sorted, graph);
    }
  }
  return sorted.reverse();
}

function dfs(node, visited, sorted, graph) {
  visited.add(node);

  for (let neighbor of graph.adjList.get(node)) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited, sorted, graph);
    }
  }
  sorted.push(node);
}

function createGraph(dependencies) {
  let nodes = new Set();
  let adjList = new Map();

  for (let [a, b] of dependencies) {
    nodes.add(a);
    nodes.add(b);

    if (!adjList.has(a)) {
      adjList.set(a, new Set());
    }
    if (!adjList.has(b)) {
      adjList.set(b, new Set());
    }
    adjList.get(a).add(b);
  }
  return { nodes, adjList };
}

class Vorrang {
  constructor(dependencies) {
    this.dependencies = dependencies;
    this.sorted = topsort(dependencies);
    this.index = 0;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.sorted.length) {
          return {
            value: this.sorted[this.index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  }
}

let studentenLeben = new Vorrang([
  ["schlafen", "studieren"],
  ["essen", "studieren"],
  ["studieren", "prüfen"],
]);

for (const next of studentenLeben) {
  console.log(next);
}
