const rows = 3;
const cols = 3;

const grid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
console.table(grid);
