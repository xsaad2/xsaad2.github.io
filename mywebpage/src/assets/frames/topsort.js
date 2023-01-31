let dependencies = [];

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

function sortRelations() {
  const relations = document.getElementById("dependencies").value;
  const dependencies = relations
    .slice(1, -1)
    .split("],[")
    .map((r) => r.split(","))
    .map(([from, to]) => [from.trim(), to.trim()]);

  const output = document.getElementById("output");
  output.innerHTML = "Sortierung: " + topsort(dependencies);
}
