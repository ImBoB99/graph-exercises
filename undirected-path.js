// find if exists a path between nodeA and nodeB

function undirectedPath (edges, nodeA, nodeB) {
  const graph = buildGraph(edges);
  console.table(graph)

  return hasPath(graph, nodeA, nodeB, new Set())
  
}

function hasPath(graph, src, destination, visited) {
  if (src === destination) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {

    if (hasPath(graph, neighbor, destination, visited) === true) {
      return true;
    }
  }

  return false;
}

function hasPathIterative(graph, src, destination) {
  let visited = new Set();
  let queue = [];

  queue.push(src);

  while (queue.length > 0) {
    const current = queue.shift();

    // if node already visited, skip it
    if (visited.has(current)) continue;
    visited.add(current);

    if (current === destination) return true;

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor)
    }}

  }

  return false;

}

function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    const [ a, b ] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

const graph = buildGraph(edges);

//console.log(undirectedPath(edges, 'k', 'p'))

console.table(buildGraph(edges))
console.log(hasPathIterative(graph, 'k', 'p'))