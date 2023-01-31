function identity(arg) {
  return arg;
}
function identity_function(arg) {
  return function () {
    return arg;
  };
}
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}
function addf(x) {
  return function (y) {
    return x + y;
  };
}
function applyf(binary) {
  return function (x) {
    return function (y) {
      return binary(x, y);
    };
  };
}
///////////////
function Person(name) {
  this.name = name;
  this.ownedCars = [];
}

Person.prototype.addCar = function (car) {
  this.ownedCars.push(car);
  car.owner = this;
};

function Car(make, model, licensePlate) {
  this.make = make;
  this.model = model;
  this.licensePlate = licensePlate;
  this.owner = null;
}
/////////
function fibonacci(n) {
  let table = [0, 1];
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[n];
}
///////
function topsort(dependencies) {
  let sorted = [];
  let visited = new Set();
  let graph = createGraph(dependencies);

  for (let node of graph.nodes) {
    if (!visited.has(node)) {
      dfs(node, visited, sorted, graph);
    }
  }
  return sorted;
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
let dependencies = [
  ["a", "b"],
  ["b", "c"],
  ["c", "d"],
  ["d", "e"],
];
let result = topsort(dependencies);
console.log(result.toString() == "e,d,c,b,a");
