function islandCount(grid) {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (explore(grid, r, c, visited) === true) {
        count++
      };
    }
  }

  return count;
}

function explore(grid, r, c, visited) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return false; 

  if (grid[r][c] === 'W') return false;

  const pos = r + "," + c;
  if (visited.has(pos)) return false;
  visited.add(pos);
  
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);

  return true;
}
