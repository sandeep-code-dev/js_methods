const nums = [1, 2, 3, 1, 2, 3, 4];
const unique = nums.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(unique);
