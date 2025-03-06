function largestComponent(graph) {
  const visited = new Set();
  let longest = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);

    if (size > longest) longest = size;
  }

  return longest;
}

function exploreSize(graph, node, visited) {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
}
